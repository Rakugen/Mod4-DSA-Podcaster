import React, { Component } from 'react';
import Episode from './Episode'
import InfiniteScroll from 'react-infinite-scroll-component'

class EpisodeContainer extends Component {
  render(){
  return(

    // <button onClick={this.props.addMoreEpisodes}>Load More</button>
    // <button onClick={this.props.backEpisodes}>Back</button>
    // {
    //   this.props.episodes.slice(this.props.firstEpisodeIndex, this.props.lastEpisodeIndex).map(episode => <Episode handleEpisodeMenuClick={this.props.handleEpisodeMenuClick} key={episode.id} {...episode}/>)
    // }

    <InfiniteScroll
      dataLength={this.props.episodes.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{textAlign: 'center'}}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={this.refresh}
      pullDownToRefresh
      pullDownToRefreshContent={
        <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
      }>
      {this.props.episodes}
    </InfiniteScroll>

    )
  }
}


export default EpisodeContainer
