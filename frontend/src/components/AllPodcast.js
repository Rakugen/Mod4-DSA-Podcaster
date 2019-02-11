import React, { Component } from 'react';
import Create from './Create'
import SearchForm from './SearchForm'
import InfiniteScroll from 'react-infinite-scroll-component'

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
              <span className="podcast-menu" onClick={() => this.props.handlePodcastMenuClick(podcast.id)} id="title">{podcast.title}</span>
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
