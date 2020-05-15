import React, {Component} from 'react';
import './App.css';
import Player from '../Player/Player';
import Header from '../Header/Header';

class App extends Component {


  render() {
    return (
      <div className="app">
        <Header />
        <Player/>
      </div>
    )
  }
}

export default App;
