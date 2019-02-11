import React, { Component } from 'react';
import Episode from './Episode'

class EpisodeContainer extends Component {
  render(){
  return(
    <div>
    <button onClick={this.props.addMoreEpisodes}>Load More</button>
    <button onClick={this.props.backEpisodes}>Back</button>
    {
      this.props.episodes.slice(this.props.firstEpisodeIndex, this.props.lastEpisodeIndex).map(episode => <Episode handleEpisodeMenuClick={this.props.handleEpisodeMenuClick} key={episode.id} {...episode}/>)
    }
    </div>
    )
  }
}


export default EpisodeContainer
