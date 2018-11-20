import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ShowGames from './ShowGames.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchGame extends Component {
  render() {
    return (
      <div className="txtSearchGame">
        <br></br>
      <input type="text" className="form-control" placeholder="Search Game"></input>
      <br></br>
      </div>
    );
  }
}

export default SearchGame;
