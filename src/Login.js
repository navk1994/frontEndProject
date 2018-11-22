import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import AddGame from './AddGame';
import ViewLibrary from './ViewLibrary';
import Popup from "reactjs-popup";

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time




function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        
            <Link to="/AddGame">Home</Link>
         
            <Link to="/protected">View Your Library</Link>
          
        
        <Route path="/AddGame" component={AddGame} />
        <Route path="/AddGame" component={AddGame} />

        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={ViewLibrary} />
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" George "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {

    

    
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };


  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>Welcome to The VideoGame Library, sign in below</p>
        <input type="text" placeholder="Enter your User ID" id="txtLoginID"></input>

        <input type="password" placeholder="Enter your Password" id="txtLoginPassword"></input>

        <br></br>
        <br></br>
        <button Class="btn btn-primary" onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;
