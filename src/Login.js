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
import axios from 'axios';
import Popup from "reactjs-popup";
import {reactLocalStorage} from 'reactjs-localstorage';

var printName;
var printID;
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
        <PrivateRoute path="/protected" component={ViewLibrary} addGameByUserID = {printID}  />  
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
        Welcome!{" " + printName}
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
    var checkLogin = true;
    {/*This is where you will put the axios logic to check against the username and password */}
  

    fakeAuth.authenticate(() => {

      if(document.getElementById('txtLoginID').value == "")
      {
        alert("Enter a number");
      }

      else if( document.getElementById('txtLoginPassword').value == "")
      {
        alert("Enter your password");
      }

      else{
         console.log((document.getElementById('txtLoginID')).value);
        axios.get('http://35.246.41.52:8080/vglibarylatest/api/user/getUser/' + (document.getElementById('txtLoginID')).value).then(response => {
          
                  
          console.log(response.data);
        
        
          if(response.data === null)
          {
            alert("The user doesnt exist");
            checkLogin = false;
          }
        
            console.log(checkLogin);
        
            console.log(checkLogin);
          if(checkLogin == true)
          {
            printName = response.data.username;
            printID = response.userID;
            localStorage.setItem('userID', response.userID);
            console.log(localStorage.getItem('userID'));
            this.setState({ redirectToReferrer: true });
          }
        });
          
      }
    });
  
  };


  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>Welcome to The VideoGame Library, sign in below</p>
        <input type="number" placeholder="Enter your User ID" id="txtLoginID"></input>

        <input type="password" placeholder="Enter your Password" id="txtLoginPassword"></input>

        <br></br>
        <br></br>
        <button Class="btn btn-primary" onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;
