import React from 'react';
import Players from './fantasy-players'
import './App.css';

function PlayersList(props) {
  const players = props.players

  const listItems = players.map((player) =>
        <div key={player.key.toString()}>
            <div className="container gradient">
                <div className="row">
                    <div className="cold-md-4">
                      <h5 className="name">{player.name}</h5>
                      <h7 className='position'>{player.team}/{player.position}</h7>
                      <img className="imageOne" src={player.imgsrc}/>
                      <img className="imageTwo" src="http://grantland.com/wp-content/themes/vip/espn-grantland/assets/parker_animation/images/court_small.png"/> 
                    </div>
                    <div className="col-md-4 text">
                      <br></br>
                      <h6>Total Games this Week: {player.TOTAL}</h6>
                      <h6> Projected Points: {Math.round(player.PROJ_PTS)}</h6>
                    </div>
                    <div className="col-md-4 text">
                      <table className="table table-condensed">
                          <thead>
                            <tr>
                              <th id="averages" colspan="2">Averages</th>
                              <th colspan="3"></th>

                            </tr>
                            <tr>
                              <td>Season   </td>
                              <td>last7    </td>
                              <td>last15   </td>
                              <td>last30   </td>
                              <td id="averages">Composite</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="numbers">{player.AVGS}  </td>
                              <td className="numbers">{player.AVG7}  </td>
                              <td className="numbers">{player.AVG15}  </td>
                              <td className="numbers">{player.AVG30}  </td>
                              <td id="composite">{Math.round(player.COMPOSITE)}</td>
                            </tr>
                          </tbody>
                        </table>
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