import React from 'react';
import Players from './fantasy-players'

function PlayersList(props) {
  const players = props.players
  const listItems = players.map((player) =>
        <div key={player.key.toString()}>
            <div> {player.NAME}</div>
            <div>Projected Points : {player.PROJ_PTS} Total Games this week: {player.TOTAL}</div>
            <div>15 day average: {player.AVG15} 30 day average: {player.AVG30}</div>
          </div>

  );
  return (
    <ul>{listItems}</ul>
  );
}



  
  const players = Players;
class PlayerViewer extends React.Component {
  render() {
    return(
        <div className="playerView">
          <PlayersList players={players} />
        </div>
      )
  }
}

export default PlayerViewer;