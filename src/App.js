import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Game from './Game.js';
import AddGame from './AddGame.js';
import SearchGame from './SearchGame.js'
import ShowGames from './ShowGames.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {

    games: [
      {title: "Sonic The Hedgehog", platform:"Sega Master System", genre:"Platformer" },
        {title: "Spyro: Year Of The Dragon", platform:"Playstation 1", genre:"Adventure" },
      {title: "Tekken 3", platform:"Playstation 1", genre:"Beat Em Up" }

    ]
  }


  render() {
    return (
      <div className="App">

      <Header/>
      <AddGame/>
      <SearchGame/>
      <Game games={this.state.games}/>
      <Footer/>
      </div>
    );
  }
}

export default App;
