import React from 'react';
import Players from './fantasy-players'
import './App.css';

  const divStyle  =  {
        width: 202, 

};
const divWidth = {
    width:500,
};

function PlayersList(props) {
  const players = props.players

  const listItems = players.map((player) =>
        <div class='card' key={player.key.toString()}>
            <div class="row">
              <div class="span4">
                 <div class="clearfix content-heading">
                    <img class="pull-left" src={player.imgsrc}/>
                      <h3>{player.name}</h3>
                 </div>
                    <p>7 day average: {player.AVG7}</p>
                  <p>15 day average: {player.AVG15}</p>
                  <p>30 day average: {player.AVG30}</p>
                  <p >Composite Avg: {Math.round(player.COMPOSITE)}</p>
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