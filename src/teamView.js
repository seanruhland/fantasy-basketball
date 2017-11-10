import React from 'react';
import Data from './team-view'
import './App.css';

// console.log(Data.Team)

function TeamView(props) {
  const teams = props.data
   // console.log(teams)
  const listItems = teams.map((team) =>
        <div className="container" key={team.key.toString()}>
            <div class="card">
				<img class="playerImage" class="card-image-top" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png" alt="Stephen Curry" />
				<div class="card-body">
				<h4 class="card-title">{team.name}</h4>
				<p class="card-text">{team.players.join(" ")}</p>
				<a href="#" class="btn btn-primary">See Profile</a>
				</div>
		</div>
            <div className="card testimonial-card">
				<div>
            		<div className="card-body">
				        <h4 className="card-title">{team.name}</h4>
				        
				        <p><i className="fa fa-quote-left"></i> {team.players.join(" ")}</p>

    				</div>
            	</div>
            </div>
            	
          </div>

  );
    console.log(listItems)
  return (
    <ul>{listItems}</ul>
  );
}



  
  const data = Data.Team;

class TeamData extends React.Component {
  constructor(){
    super();
    this.state = {data}
  }
  render() {
    return(
        <div className="playerView">
          <TeamView data={data} />
        </div>
      )
  }
}

export default TeamData;