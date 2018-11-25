import React from 'react';
import SkyLight from 'react-skylight';
import axios from 'axios';

class UpdateGame extends React.Component {
  constructor(props){
    super(props);
  }

  updateGame = (event) => {
    var data = {
    gameID: document.getElementById('gameID').value,
    gameTitle:document.getElementById('gameTitle').value,
    gamePlatform:document.getElementById('gamePlatform').value,
    gameGenre:document.getElementById('gameGenre').value
  };
  event.preventDefault();
  axios.put('http://localhost:8080/vglibary/api/game/updateGame/', data).then((response) => {
    console.log(response.data);
    window.location.reload();
  });
}

  render() {

    return (
      <div>
      <input type="text" id="gameID" placeholder="Enter Game ID"></input>
          <br></br>
         
          <input type="text" id="gameTitle" placeholder="Enter Game Title"></input>
          <br></br>
          <input type="text" id="gamePlatform" placeholder="Enter Game Platform"></input>
          <br></br>
          <input type="text" id="gameGenre" placeholder="Enter Game Genre"></input>
          <br></br>
        <button onClick={this.updateGame}>Update Game</button>
      </div>
    )
  }
}

UpdateGame.displayName = 'Example';

export default UpdateGame;