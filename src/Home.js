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
import SkyLight from 'react-skylight';
import ReactDOM from 'react-dom';
import { reactLocalStorage } from 'reactjs-localstorage';


class Home extends Component {
    constructor(props){
        super(props);

        

        this.state = {
            userID: this.props.identification,
            gaming: this.props.array
        }

        this.options = {
          defaultSortName: 'name',  // default sort column name
          defaultSortOrder: 'desc'  // default sort order
    };
    }


    getAllGames = () => {
        axios.get('http://35.246.41.52:8080/vglibarylatest/api/game/getAllGames').then(response => {
          this.setState({
            gaming: response.data
          });
        });
    }

    createDeleteButton =(cell,row) => {
        return <button id={row.gameID} className="btn btn-outline-danger" onClick={() => this.deleteGame(row.gameID)}>Delete Game</button>;
      }

      

      deleteGame = (event) => {
        axios.delete('http://35.246.41.52:8080/vglibarylatest/api/game/deleteGame/' + event).then((response) => {
        ReactDOM.render(<Home />,document.getElementById('gameTable'));
  });
}

  createUpdateButton = (cell, row) => {
    return <button id={row.gameID} className="btn btn-outline-success" onClick={() => this.simpleDialog.show()}>Update Game</button>;
  }

 showUpdateGamePopup = (event) => {

  return (
    <div>
      <section>
        <h1>React SkyLight</h1>
        <button onClick={() => this.simpleDialog.show()}>Open Modal</button>
      </section>
      <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Hi, I'm a simple modal">
        Hello, I dont have any callback.
      </SkyLight>
    </div>
  )
  }

  updateGame = (event) => {

    var gamePlatform = document.getElementById("dropDownGamePlatform");
  var gamePlatformResult = gamePlatform.options[gamePlatform.selectedIndex].text;

  var gameGenre = document.getElementById("dropDownGameGenre");
  var gameGenreResult = gameGenre.options[gameGenre.selectedIndex].text;

    var data = {
    gameID: document.getElementById('gameID').value,
    gameTitle:document.getElementById('gameTitle').value,
    gamePlatform:gamePlatformResult,
    gameGenre:gameGenreResult,
    userID: this.props.identification
  };


  event.preventDefault();
  axios.put('http://35.246.41.52:8080/vglibarylatest/api/game/updateGame/', data).then((response) => {
    console.log(response.data);
    ReactDOM.render(<Home />,document.getElementById('gameTable'));
  });
}

  

    componentWillUpdate()
    {
      localStorage.setItem('userID', this.props.identification);
      console.log("Home.js: " + localStorage.getItem('userID')) ;
    }
  

   

  
    
  

  
    componentDidMount() {
        this.getAllGames();
       console.log("Local storage value = " + localStorage.getItem('userID')) ;
    }

  render() {

    console.log("The returned props =" + this.props.identification);
    console.log("The returned state is " + this.state.userID);
    return (
      <div>
      <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Update Game">
      <input type="text" id="gameID" className="form-control gameID" placeholder="Enter Game ID"></input>
          <br></br>      
      <input type="text" placeholder="Game Title" id="gameTitle" className="form-control gameTitle"></input>
<br />
    <select id="dropDownGamePlatform" className="form-control" name="gamePlatform">

   <option selected="Playstation 1">Playstation 1</option>
   <option value="Playstation 2">Playstation 2</option>
   <option value="Playstation 3">Playstation 3</option>
   <option value="Xbox">Xbox</option>
   <option value="Xbox 360">Xbox 360</option>
   <option value="Xbox One">Xbox One</option>
   <option value="Sega MasterSystem">Sega MasterSystem</option>
   <option value="Sega MegaDrive">Sega MegaDrive</option>
   <option value="Nintendo Gameboy">Nintnedo Gameboy</option>
   <option value="Nintendo Gameboy Advance">Nintendo Gameboy Advance</option>
   <option value="Nintendo Wii">Nintendo Wii</option>
   <option value="Nintendo Wii U">Nintendo Wii U</option>
   <option value="Nintendo Switch">Nintendo Switch</option>
 </select>

<br />

    <select id="dropDownGameGenre" className="form-control" name="gameGenre">
   <option value="Platformer">Platformer</option>
   <option selected="Shoot Em Up">Shoot Em Up</option>
   <option value="RPG">RPG</option>
   <option value="Racing">Racing</option>
   <option value="Horror">Horror</option>
   <option value="Puzzle">Puzzle</option>
 </select>
<br/>
 <button className="btn btn-danger form-control" onClick={this.updateGame}>Update Game</button>

            </SkyLight>
      <div id="gameTable" style={{ width: '90%', margin:'auto'}} >
      <AddGame addBasedOnID={this.props.identification}/>
      <BootstrapTable data={this.state.gaming}
      height='650'
      scrollTop={ 'Bottom' }
      striped
      search>

      <TableHeaderColumn Column width={'5%'} dataField='gameID' dataAlign="center" isKey={ true }>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'9%'} dataField='gameTitle' dataAlign='center' dataSort>Game Title</TableHeaderColumn>
      <TableHeaderColumn Column width={'25%'} dataField='gamePlatform' dataAlign="center" dataSort>Game Platform</TableHeaderColumn>
      <TableHeaderColumn dataField='gameGenre' dataAlign="center">Game Genre</TableHeaderColumn>
     
      <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton} dataAlign="center" expandable={false} ></TableHeaderColumn>
      <TableHeaderColumn dataField='button' dataFormat={this.createUpdateButton} dataAlign="center" expandable={false} ></TableHeaderColumn>
      
      </BootstrapTable>


      </div>
</div>
    );
  }
}

export default Home;
