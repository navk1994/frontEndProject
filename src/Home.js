import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Game from './Game.js';
import AddGame from './AddGame.js';
import SearchGame from './SearchGame.js'
import ShowGames from './ShowGames.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ReactDOM from 'react-dom';


class Home extends Component {
    constructor(props){
        super(props);

        

        this.state = {
            gaming: this.props.array
        }
    }


    getAllGames = () => {
        axios.get('http://localhost:8080/vglibary/api/game/getAllGames').then(response => {
          this.setState({
            gaming: response.data
          });
        });
    }

    createDeleteButton =(cell,row) => {
        return <button id={row.gameID} className="btn btn-outline-danger" onClick={() => this.deleteGame(row.gameID)}>Delete Game</button>;
      }

      

      deleteGame = (event) => {
        axios.delete('http://localhost:8080/vglibary/api/game/deleteGame/' + event).then((response) => {
        ReactDOM.render(<Home />,document.getElementById('gameTable'));
  });
}

   

  

  

  
    componentDidMount() {
        this.getAllGames();
    }

  render() {

    console.log("The returned props =" + this.props.identification);
    return (
      <div id="gameTable" style={{ width: '90%', margin:'auto'}} >
        
      <BootstrapTable data={this.state.gaming}
      height='650'
      scrollTop={ 'Bottom' }
      striped
      search>

      <TableHeaderColumn Column width={'5%'} dataField='gameID' dataAlign="center" isKey={ true }>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'9%'} dataField='gameTitle' dataAlign='center'> Game Title</TableHeaderColumn>
      <TableHeaderColumn Column width={'25%'} dataField='gamePlatform' dataAlign="center">Game Platform</TableHeaderColumn>
      <TableHeaderColumn dataField='gameGenre' dataAlign="center">Game Genre</TableHeaderColumn>
     
      <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton} dataAlign="center" expandable={false} ></TableHeaderColumn>
      <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton} dataAlign="center" expandable={false} ></TableHeaderColumn>
      </BootstrapTable>
</div>
    );
  }
}

export default Home;
