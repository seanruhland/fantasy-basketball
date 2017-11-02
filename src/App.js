import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerViewer from './playerViewer.js';
import samplePlayers from './fantasy-players';

console.log(samplePlayers);

class App extends Component {
  constructor() {
    super();

    this.loadPlayers = this.loadPlayers.bind(this);
    //initial state
    this.state = {
      players: {},
      order: {}
    };
  }

  loadPlayers() {
    this.setState({
      players: samplePlayers
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fantasy Basketball Tool</h1>
        </header>
        <div>
          <p className="App-intro">We are going to make an App to help us win fantasy basketball</p>
          <PlayerViewer loadPlayers= {this.loadPlayers} className="PlayerView"/>
        </div>
      </div>
    );
  };
}

export default App;
