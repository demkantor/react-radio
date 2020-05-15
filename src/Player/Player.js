import React, {Component} from 'react';
import '../App/App.css';
import AudioPlayer from 'react-modular-audio-player';

class Player extends Component {

  state = {
    playing: false,
    alternative: false,
    eightys: false,
    hiphop: false,
    jazz: false,
    raggae: false,
  }

  iconStyle = { width: "fit-content" }
  rearrangedPlayer = [
    {
      className: "top",
      style: { marginBottom: "1rem" },
      innerComponents: [
        {
          type: "name",
          style: { width: "28%" }
        }
      ]
    },
    {
      className: "bottom",
      innerComponents: [
        {
          type: "play",
          style: { width: "4%", justifyContent: "flex-end" }
        },
        {
          type: "rewind",
          style: { width: "4%", justifyContent: "flex-end" }
        },
        {
          type: "forward",
          style: { width: "4%" }
        },
        {
          type: "volume",
          style: { width: "20%" }
        }
      ]
    }
  ];

  alternativePlaylist = [
    { src: "http://158.69.38.194:9213/stream?type=http&amp;nocache=14875",
      title: "Indie Rock",
      artist: "Alternative" 
    },
    { src: "http://87.98.130.255:8511/stream?type=http&amp;nocache=14875",
      title: "90's",
      artist: "Alternative" 
    },
    { src: "http://167.114.210.232:8066/stream?type=http&amp;nocache=14875",
      title: "Grunge",
      artist: "Alternative" 
    }
  ];

  eightysPlaylist = [
    { src: "http://149.56.155.73:8052/stream?type=http&amp;nocache=14875",
      title: "Pop",
      artist: "80's" 
    },
    { src: "http://208.115.213.242:8010/stream?type=http&amp;nocache=14875",
      title: "Top 40",
      artist: "80's" 
    },
    { src: "http://192.111.140.11:8508/stream?type=http&amp;nocache=14875",
      title: "Hair Bands",
      artist: "80's" 
    }
  ];

  hiphopPlaylist = [
    { src: "http://77.168.22.74:8008/stream?type=http&amp;nocache=14875",
      title: "Underground",
      artist: "Hip-Hop" 
    },
    { src: "http://149.56.175.167:5708/stream?type=http&amp;nocache=14875",
      title: "Urban",
      artist: "Hip-Hop" 
    },
    { src: "http://162.252.85.85:8872/stream?type=http&amp;nocache=14875",
      title: "World",
      artist: "Hip-Hop" 
    }
  ];

  jazzPlaylist = [
    { src: "http://167.114.64.181:8153/stream?type=http&amp;nocache=14875",
      title: "Relaxing",
      artist: "Jazz" 
    },
    { src: "http://64.95.243.43:8020/stream?type=http&amp;nocache=14875",
      title: "Groovy",
      artist: "Jazz" 
    },
    { src: "http://64.95.243.43:8002/stream?type=http&amp;nocache=14875",
      title: "London Smooth",
      artist: "Jazz" 
    }
  ];

  raggaePlaylist = [
    { src: "http://51.15.152.81:8905/stream?type=http&amp;nocache=14875",
      title: "Rocking",
      artist: "Raggae" 
    },
    { src: "http://158.69.227.214:8014/stream?type=http&amp;nocache=14875",
      title: "Classics",
      artist: "Raggae" 
    },
    { src: "http://64.71.79.181:9998/stream?type=http&amp;nocache=14875",
      title: "Gettin' High",
      artist: "Raggae" 
    }
  ];

  displayBars=(propertyName)=>{
    this.setState({
      playing: true,
      alternative: false,
      eightys: false,
      hiphop: false,
      jazz: false,
      raggae: false,
      [propertyName]: true
    })
  }

  render() {
    return (
      <div className="radio">
        {this.state.playing === true &&
          <div className="playing-top">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        }
        <div className="station audio-player-blue" onClick={()=>this.displayBars('jazz')}>
            <AudioPlayer 
              rearrange={this.rearrangedPlayer}
              audioFiles={this.jazzPlaylist}
              playerWidth="50em"
              fontWeight="900"
              iconSize="2.5rem"
              fontSize="2rem"
              sliderClass="invert-blue-grey"
            />
            {this.state.jazz === true &&
              <div className="playing">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
              </div>
            }
        </div>
        <div className="station audio-player-blue" onClick={()=>this.displayBars('raggae')}>
          <AudioPlayer 
              rearrange={this.rearrangedPlayer}
              audioFiles={this.raggaePlaylist}
              playerWidth="50em"
              fontWeight="900"
              iconSize="2.5rem"
              fontSize="2rem"
              sliderClass="invert-blue-grey"
          />
          {this.state.raggae === true && 
            <div className="playing">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          }
        </div>
        <div className="station audio-player-blue" onClick={()=>this.displayBars('alternative')}>
          <AudioPlayer 
              rearrange={this.rearrangedPlayer}
              audioFiles={this.alternativePlaylist}
              playerWidth="50em"
              fontWeight="900"
              iconSize="2.5rem"
              fontSize="2rem"
              sliderClass="invert-blue-grey"
          />
          {this.state.alternative === true && 
            <div className="playing">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          }
        </div>
        <div className="station audio-player-blue" onClick={()=>this.displayBars('hiphop')}>
          <AudioPlayer 
              rearrange={this.rearrangedPlayer}
              audioFiles={this.hiphopPlaylist}
              playerWidth="50em"
              fontWeight="900"
              iconSize="2.5rem"
              fontSize="2rem"
              sliderClass="invert-blue-grey"
          />
          {this.state.hiphop === true && 
            <div className="playing">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          }
        </div>
        <div className="station audio-player-blue" onClick={()=>this.displayBars('eightys')}>
          <AudioPlayer 
            rearrange={this.rearrangedPlayer}
            audioFiles={this.eightysPlaylist}
            playerWidth="50em"
            fontWeight="900"
            iconSize="2.5rem"
            fontSize="2rem"
            sliderClass="invert-blue-grey"
          />
          {this.state.eightys === true && 
            <div className="playing">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Player;
