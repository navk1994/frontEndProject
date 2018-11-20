import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ShowGames from './ShowGames.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddGame extends Component {

addGame = () =>
{
  var gamePlatform = document.getElementById("dropDownGamePlatform");
  var gamePlatformResult = gamePlatform.options[gamePlatform.selectedIndex].text;

  var gameGenre = document.getElementById("dropDownGameGenre");
  var gameGenreResult = gameGenre.options[gameGenre.selectedIndex].text;

  var game = {
    title: document.getElementById('tbxGameTitle').value,
    platform: gamePlatformResult,
    genre: gameGenreResult

  }

  

  


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
 </select>

<br />

    <select id="dropDownGameGenre" className="form-control" name="gameGenre">
   <option value="Platform">Platform</option>
   <option selected="Shoot Em Up">Shoot Em Up</option>
   <option value="RPG">RPG</option>
   <option value="Racing">Racing</option>
 </select>
<br/>
 <button className="btn btn-danger form-control">Add Game</button>
  </div>
</div>
      </div>
    );
  }
}

export default AddGame;
