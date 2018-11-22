import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Game from './Game.js';
import AddGame from './AddGame.js';
import SearchGame from './SearchGame.js'
import ShowGames from './ShowGames.js';
import Home from './Home.js'
import Footer from './Footer.js';
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';


class ViewLibrary extends Component {

  


  render() {
    return (
      <div className="App">
      
     
      
    
      <Home />
      <Footer/>
    


      </div>
    );
  }
}

export default ViewLibrary;
