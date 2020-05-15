import React, {Component} from 'react';
import '../App/App.css';
import AudioPlayer from "react-modular-audio-player";


class Random extends Component {

    rearrangedPlayer = [
        {
          className: "adele",
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

  render() {
    return (
        <div className="radio">
            <AudioPlayer
                audioFiles={[
                    {
                    src: "/rollingInTheDeep.mp3",
                    title: "Rolling In The Deep",
                    artist: "Adele"
                    }
                ]}
                rearrange={this.rearrangedPlayer}
                playerWidth="10rem"
                iconSize="9rem"
            />
        </div>
    
    )
  }
}

export default Random;