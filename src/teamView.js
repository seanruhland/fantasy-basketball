import React from 'react';
import Data from './team-view'
import './App.css';

// console.log(Data.Team)
function TeamView(props) {
  const teams = props.data;
  const teamId = teams;	
  console.log(teamId)
  const listItems = teams.map((team) =>
        <div key={team.name.toString()}>
            
            
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