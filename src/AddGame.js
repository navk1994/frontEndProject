import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ShowGames from './ShowGames.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddGame extends Component {

addGame = () =>
{
  var gamePlatform = document.getElementById("dropDownGamePlatform");
  var gamePlatformResult = gamePlatform.options[gamePlatform.selectedIndex].text;

  var gameGenre = document.getElementById("dropDownGameGenre");
  var gameGenreResult = gameGenre.options[gameGenre.selectedIndex].text;

  var game = {
    gameTitle: document.getElementById('tbxGameTitle').value,
    gamePlatform: gamePlatformResult,
    gameGenre: gameGenreResult,
    userID: this.props.addBasedOnID

  }

  

  var crossOrigin = {'Access-Control-Allow-Origin': '*'};
  {/*headers:crossOrigin*/}
  axios.post('http://35.246.41.52:8080/vglibarylatest/api/game/createGame/', game)
         .then((response) => {
            console.log(response.data);
          ReactDOM.render(<Home />,document.getElementById('gameTable'));
          
});

  console.log(game);

  


}

  render() {
    return (
      <div className="txtSearchGame">
      <br></br>
      <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-5">Add Game</h1>

    <input type="text" placeholder="Game Title" id="tbxGameTitle" className="form-control gameTitle"></input>
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
 <button className="btn btn-danger form-control" onClick={this.addGame}>Add Game</button>
  </div>
</div>
      </div>
    );
  }
}

export default AddGame;
