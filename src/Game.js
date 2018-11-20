import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ShowGames from './ShowGames.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Game extends Component {
  render() {
    const games = this.props.games;
    const gamesList = games.map(game => {

      return (
        <div className="tblOfGames" key={game.id}>

        <table className="table table-bordered">
            <thead>
              <tr>
                <th>Game Title</th>
                <th>Platform</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{game.title}</td>
                <td>{game.platform}</td>
                <td>{game.genre}</td>
              </tr>

            </tbody>
          </table>

        </div>
      );

    })



    return (
      <div className="gameList">
        {gamesList}
      </div>
    );
  }
}

export default Game;
