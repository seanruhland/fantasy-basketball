import React from 'react';
import Data from './team-view'
import './App.css';

// console.log(Data.Team)

function TeamView(props) {
  const teams = props.data
   // console.log(teams)
  const listItems = teams.map((team) =>
        <div className="container" key={team.key.toString()}>
            <div classNAme="row">
				<img className="teamImg" src="http://14042-presscdn-0-36.pagely.netdna-cdn.com/wp-content/uploads/2015/02/gzxolsnmemnno8jxwvbt.jpg" alt="Stephen Curry" />
				<div class="card-body">
					<h4 class="card-title">{team.name}</h4>
					<p class="card-text">{team.players.join(" ")}</p>
					<a href="#" class="btn btn-primary">More Stats</a>
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