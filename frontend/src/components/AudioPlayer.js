import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class AudioPlayer extends Component {
  render(){
  return(
    <div className="card-panel hoverable">
    <img src={this.props.thumbnail}/>
    <h1>{this.props.podcast.title}</h1>
    <h2>{this.props.episode.title}</h2>
    <ReactAudioPlayer
        src={this.props.episode.audio_url}
        autoPlay
        controls
      />
    </div>
    )
  }
}


export default AudioPlayer
