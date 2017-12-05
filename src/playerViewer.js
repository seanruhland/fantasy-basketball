import React from 'react';
import Players from './fantasy-players'
import './App.css';

function PlayersList(props) {
  const players = props.players

  const listItems = players.map((player) =>
        <div key={player.key.toString()}>
            <div className="container">
                <div className="row"><img className="imgSize" src={player.imgsrc}/>
                    <div className="col-md-4 text">
                      <h3 className="name">{player.name}</h3>
                      <br></br>
                      <h6>Total Games this Week: {player.TOTAL}</h6>
                      <h6> Projected Points: {Math.round(player.PROJ_PTS)}</h6>
                    </div>
                    <div className="col-md-4 text">
                      <p>7 day average: {player.AVG7}</p>
                      <p>15 day average: {player.AVG15}</p>
                      <p>30 day average: {player.AVG30}</p>
                      <p >Composite Avg: {Math.round(player.COMPOSITE)}</p>
                    </div>
                </div>
              </div>
        </div>
  );
  return (
    <ul>{listItems}</ul>
  );
}



  
  const players = Players.freeAgents;
class PlayerViewer extends React.Component {
  constructor(){
    super();
    this.state = {players}
  }
  render() {
    return(
        <div className="playerView">
          <PlayersList players={players} />
        </div>
      )
  }
}

export default PlayerViewer;