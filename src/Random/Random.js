import React, {Component} from 'react';
import '../App/App.css';
import AudioPlayer from "react-modular-audio-player";


class Random extends Component {

    state = {
        randomlist: [
            { src: "http://51.15.152.81:8905/stream?type=http&amp;nocache=14875",
                title: "Rocking",
                artist: "Raggae" 
            }
        ],
        randomPlaylist: [
            { src: "http://158.69.227.214:8014/stream?type=http&amp;nocache=14875",
              title: "Classics",
              artist: "Raggae" 
            },
            { src: "http://64.95.243.43:8002/stream?type=http&amp;nocache=14875",
                title: "London Smooth",
                artist: "Jazz" 
            },
            { src: "http://77.168.22.74:8008/stream?type=http&amp;nocache=14875",
                title: "Underground",
                artist: "Hip-Hop" 
            },
            { src: "http://162.252.85.85:8872/stream?type=http&amp;nocache=14875",
                title: "World",
                artist: "Hip-Hop" 
            },
            { src: "http://149.56.155.73:8052/stream?type=http&amp;nocache=14875",
                title: "Pop",
                artist: "80's" 
            },
            { src: "http://64.95.243.43:8020/stream?type=http&amp;nocache=14875",
                title: "Groovy",
                artist: "Jazz" 
            },
            { src: "http://192.111.140.11:8508/stream?type=http&amp;nocache=14875",
                title: "Hair Bands",
                artist: "80's" 
            },
            { src: "http://158.69.38.194:9213/stream?type=http&amp;nocache=14875",
                title: "Indie Rock",
                artist: "Alternative" 
            },
            { src: "http://51.15.152.81:8905/stream?type=http&amp;nocache=14875",
                title: "Rocking",
                artist: "Raggae" 
            },
            { src: "http://167.114.210.232:8066/stream?type=http&amp;nocache=14875",
                title: "Grunge",
                artist: "Alternative" 
            },
            { src: "http://208.115.213.242:8010/stream?type=http&amp;nocache=14875",
                title: "Top 40",
                artist: "80's" 
            },
            { src: "http://167.114.64.181:8153/stream?type=http&amp;nocache=14875",
                title: "Relaxing",
                artist: "Jazz" 
            },
            { src: "http://149.56.175.167:5708/stream?type=http&amp;nocache=14875",
                title: "Urban",
                artist: "Hip-Hop" 
            },
            { src: "http://64.71.79.181:9998/stream?type=http&amp;nocache=14875",
                title: "Gettin' High",
                artist: "Raggae" 
            },
            { src: "http://87.98.130.255:8511/stream?type=http&amp;nocache=14875",
                title: "90's",
                artist: "Alternative" 
            },
        ]
    }


    rearrangedPlayer = [
        {
          className: "random-player",
          innerComponents: [
            {
              type: "play",
              style: {
                width: "100%",
                justifyContent: "center",
                filter: "invert(100%)",
                opacity: "0.4"
              }
            }
          ]
        }
    ];

    shuffle=()=>{
        console.log('everyday im shufflin');
        this.setState({
            randomlist: this.state.randomPlaylist.sort(()=>0.5-Math.random())
        });
        console.log(this.state.randomPlaylist)
    }

  render() {
    return (
        <div className="radio" onClick={this.shuffle}>
            <h2>Each Time you hit play</h2>
            <AudioPlayer
                className="random-player"
                audioFiles={this.state.randomlist}
                rearrange={this.rearrangedPlayer}
                playerWidth="10rem"
                iconSize="9rem"
            />
            <h2>A random genre will play</h2>
        </div>
    
    )
  }
}

export default Random;