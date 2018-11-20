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

  

  

  
    componentDidMount() {
        this.getAllGames();
    }

  render() {
    return (
      <div className="gameTable" style={{ width: '90%', margin:'auto'}} >
      <BootstrapTable data={this.state.gaming}
      height='650'
      scrollTop={ 'Bottom' }
      striped
      search>

      <TableHeaderColumn Column width={'5%'} dataField='gameID' dataAlign="center" isKey={ true }>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'9%'} dataField='gameTitle' dataAlign='center'> Game Title</TableHeaderColumn>
      <TableHeaderColumn Column width={'25%'} dataField='gamePlatform' dataAlign="center">Game Platform</TableHeaderColumn>
      <TableHeaderColumn dataField='gameGenre' dataAlign="center">Game Genre</TableHeaderColumn>
     
      <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton} dataAlign="center" expandable={false} >Delete</TableHeaderColumn>
      </BootstrapTable>
</div>
    );
  }
}

export default Home;
