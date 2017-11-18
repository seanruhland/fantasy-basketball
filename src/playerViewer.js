import React from 'react';
import Players from './fantasy-players'
import './App.css';

  const divStyle  =  {
        width: 202, 

};
function PlayersList(props) {
  const players = props.players
  const listItems = players.map((player) =>
        <div key={player.key.toString()}>
            <div class="card text-center" style={divStyle}>
             <div class="card-body">
                <h4 class="card-title">{player.name}</h4>
                <h6 class="card-subtitle text-muted">Average: {player.AVGS} Projected Points: {player.PROJ_PTS}</h6>
              </div>


                  <img src="https://cdn.fansided.com/wp-content/assets/site_images/fansided/headers/logo-nba-free-agency__150x150.png" alt="Photo of sunset" />
              <div class="card-body">
                <p class="card-text">7 day average: {player.AVG7}</p>
                <p class="card-text">15 day average: {player.AVG15}</p>
                <p class="card-text">30 day average: {player.AVG30}</p>

                <a href="#" class="btn btn-info">Full Report</a>
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