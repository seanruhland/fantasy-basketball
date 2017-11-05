import React from 'react';
import Players from './fantasy-players'
import './App.css';


function PlayersList(props) {
  const players = props.players
  const listItems = players.map((player) =>
        <div class="container" key={player.key.toString()}>
            
            <div class="align-items-center">
              <div class="Name"> {player.NAME}</div>
              </div>
             <div class="row">
                 <div class="col-6">
                  Total Games this week: {player.TOTAL}
                </div>
                <div class="col-6">
                  Projected Points : {player.PROJ_PTS}
                </div>
             </div>
             <div class="row">
                 <div class="col-md-auto">
                  7 day average:       {player.AVG7}
                </div>
                <div class="col-md-auto">
                  15 day average: {player.AVG15}
                </div>
                 <div class="col-md-auto">
                  30 day average: {player.AVG30}
                </div>
               </div>
             <div class="row">
                <div class="col" class="Season">
                  Season Average
                </div>
             </div>
             <div class="row">
                <div class="col" class="Season">
                  {player.AVGS}
                </div>
             </div>
          </div>

  );
  return (
    <ul>{listItems}</ul>
  );
}



  
  const players = Players;
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