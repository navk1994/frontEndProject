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
import UpdateGame from './UpdateGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestComponent from './TestComponent';
import ReactDOM from 'react-dom';


class App extends Component {

 


  render() {
    return (
      <div id="table" className="App">

     
      <Header/>
      <Login/>
  
     
    
      <Footer/>
       
    

     
   
      </div>
    );
  }
}

export default App;
