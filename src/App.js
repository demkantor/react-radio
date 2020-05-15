import React, {Component} from 'react';
import './App.css';
import AudioPlayer from 'react-modular-audio-player';

class App extends Component {

  rearrangedPlayer = [
    {
      className: "tier-top",
      style: {margin: "0.8rem"},
      innerComponents: [
        { 
          type: "play",
          style: {width: "fit-content"}
        },
        {
          type: "rewind",
          style: {width: "fit-content"}
        },
        {
          type: "forward",
          style: {width: "fit-content"}
        },
        {
          type: "volume"
        }
      ]
    },
    {
      className: "tier-bottom",
      style: {margin: "0rem 0.3rem 0.3rem 0.3rem"},
      innerComponents: [
        {
          type: "time",
          style: {width: "fit-content"}
        },
        {
          type: "seek"
        }
      ]
    }
  ]


  playlist = [
    { src: "http://167.114.64.181:8153/stream?type=http&amp;nocache=14875",
      title: "Song",
      artist: "Singer" },
    { src: "/moreMusic.mp3",
      title: "Another Song",
      artist: "Another Singer" }
  ];

  render() {
    return (
      <div className="app">
        <div class="station">
          <AudioPlayer 
          rearrange={this.rearrangedPlayer}
            audioFiles={this.playlist}
            playerWidth="50em"
            fontWeight="900"
          />
          <div class="playing">
               <div class="rect1"></div>
               <div class="rect2"></div>
               <div class="rect3"></div>
               <div class="rect4"></div>
               <div class="rect5"></div>
          </div>
        </div>
        <div id="station0" class="station">
          <AudioPlayer 
          rearrange={this.rearrangedPlayer}
            audioFiles={this.playlist}
            playerWidth="50em"
            fontWeight="900"
          />
        </div>
        <div id="station0" class="station">
          <AudioPlayer 
          rearrange={this.rearrangedPlayer}
            audioFiles={this.playlist}
            playerWidth="50em"
            fontWeight="900"
          />
        </div>
    
         
      </div>
    )
  }
}

export default App;
