import React, { Component } from 'react';
import Create from './Create'
import SearchForm from './SearchForm'

class AllPodcast extends Component {
  render(){
  return(
    <div className="navbar">
      <div className="navbar">
        Searchform...
        <button onClick={this.props.addMore}>Next</button>
        <button onClick={this.props.back}>Back</button>
        <SearchForm />
      </div>
      <div>
        {
          this.props.allPodcast.slice(this.props.firstIndex, this.props.lastIndex).map(podcast => {
          return( <div className="navbar" key={podcast.id}>
              <h2 onClick={() => this.props.handlePodcastMenuClick(podcast.id)} id="title">{podcast.title}</h2>
            </div>
          )})
        }
      </div>
      <button>Create</button>
    </div>
    )
  }
}


export default AllPodcast
