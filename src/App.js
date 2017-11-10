import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerViewer from './playerViewer.js';
import TeamData from './teamView.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fantasy Basketball Tool</h1>
        </header>
        <div>
          <p className="App-intro">We are going to make an App to help us win fantasy basketball</p>
          <TeamData />
          <PlayerViewer className="PlayerView"/> 
        </div>
      </div>
    );
  };
}

export default App;
