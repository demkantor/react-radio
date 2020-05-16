import React, {Component} from 'react';
import './App.css';
import Player from '../Player/Player';
import Header from '../Header/Header';
// import Random from '../Random/Random';

class App extends Component {


  render() {
    return (
      <div className="app">
        <Header />
        <Player />
        {/* <Random /> */}
      </div>
    )
  }
}

export default App;
