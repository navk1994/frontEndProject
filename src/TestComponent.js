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
import SkyLight from 'react-skylight';

class TestComponent extends Component {

  


    render() {

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
}

export default TestComponent;
