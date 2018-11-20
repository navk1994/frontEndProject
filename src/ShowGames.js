import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class ShowGames extends Component {
  render() {
    return (
      <div className="tblOfGames" >

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
              <td>Sonic The Hedgehog</td>
              <td>Sega Master System</td>
              <td>Platformer</td>
            </tr>
            <tr>
              <td>Sypro: Year Of The Dragon</td>
              <td>Playstation 1</td>
              <td>Adventure</td>
            </tr>
            <tr>
              <td>Tekken 3</td>
              <td>Playstation 1</td>
              <td>Beat Em Up</td>
            </tr>
          </tbody>
        </table>


      </div>
    );
  }
}

export default ShowGames;
