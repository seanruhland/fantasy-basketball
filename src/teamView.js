import React from 'react';
import Data from './team-view'
import './App.css';

// console.log(Data.Team)

  const divStyle  =  {
  			width: 500,	

};
function TeamView(props) {
  const teams = props.data
  const listItems = teams.map((team) =>
        <div style={divStyle} key={team.key.toString()}>
            <div classNAme="card" >
				<img className="card-image-top" src="http://14042-presscdn-0-36.pagely.netdna-cdn.com/wp-content/uploads/2015/02/gzxolsnmemnno8jxwvbt.jpg" alt="Stephen Curry" />
				<div className="card-body">
					<h4 className="card-title">{team.name}</h4>
					<p className="card-text">{team.players.join(" ")}</p>
					<a href="#" className="btn btn-primary">More Stats</a>
					</div>
				</div>
           </div>


  );

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