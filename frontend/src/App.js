import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllPodcast from './components/AllPodcast'
import AudioPlayer from './components/AudioPlayer'
import Navbar from './components/Navbar'
import Login from './components/Login'
import DropDown from './components/DropDown'
import SelectedPodcast from './components/SelectedPodcast'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import {Dropdown, NavItem, Button, Container} from 'react-materialize'
import 'jquery';

class App extends Component {

  state = {
    allPodcast: [],
    podcast: {},
    firstIndex: 0,
    lastIndex: 10,
    show: false,
    episode: {},
    thumbnail: {},
    firstEpisodeIndex: 0,
    lastEpisodeIndex: 5,
    search: '',
    filter: []
  }

componentDidMount(){
  fetch('http://localhost:3000/api/v1/podcasts')
  .then(response => response.json())
  .then(podcast => {
    podcast.sort((a, b) => {
      return a.title.localeCompare(b.title)
    })
    this.setState({
      allPodcast: podcast
    })
  })
}



filterSearchBar = () => {
  return this.state.allPodcast.filter(podcast => podcast.title.toLowerCase().includes(this.state.search.toLowerCase()))
}

handleSearch = (e) => {
  this.setState({
    search: e.target.value
  })
}

handlePodcastMenuClick = (id) => {
  const foundPodcast = this.state.allPodcast.find(podcast => {
      return podcast.id === id
  })
  this.setState({
    podcast: foundPodcast,
    show: true
  })
}

handleEpisodeMenuClick = (id) => {
  const foundEpisode = this.state.podcast.episodes.find(episode => {
      return episode.id === id
  })
  this.setState({
    episode: foundEpisode,
    thumbnail: this.state.podcast.thumbnail
  })
}

addMore = () => {
  this.setState({
    firstIndex: this.state.firstIndex + 1,
    lastIndex: this.state.lastIndex + 1
  })
}

addMoreEpisodes = () => {
  this.setState({
    firstEpisodeIndex: this.state.firstEpisodeIndex+ 1,
    lastEpisodeIndex: this.state.lastEpisodeIndex + 1
  })
}

backEpisodes = () => {
  this.setState({
    firstEpisodeIndex: this.state.firstEpisodeIndex - 1,
    lastEpisodeIndex: this.state.lastEpisodeIndex - 1
  })
}

back = () => {
  this.setState({
    firstIndex: this.state.firstIndex - 1,
    lastIndex: this.state.lastIndex - 1
  })
}

  render() {
    console.log(this.state.allPodcast)
    return (
      <div className="App">
        <div>
        <Navbar />
        </div>
        <div className='row'>
          <Login />
          <div className='col s3'>
            <AllPodcast
            addMore={this.addMore}
            back={this.back}
            firstIndex={this.state.firstIndex}
            lastIndex={this.state.lastIndex}
            allPodcast={this.filterSearchBar()}
            handleSearch={this.handleSearch}
            search={this.state.search}
            handlePodcastMenuClick={this.handlePodcastMenuClick}/>
          </div>
          <div className="col s9">
            <SelectedPodcast
            allPodcast={this.state.allPodcast}
            podcast={this.state.podcast}
            show={this.state.show}
            handleEpisodeMenuClick={this.handleEpisodeMenuClick}
            addMoreEpisodes={this.addMoreEpisodes}
            backEpisodes={this.backEpisodes}
            firstEpisodeIndex={this.state.firstEpisodeIndex}
            lastEpisodeIndex={this.state.lastEpisodeIndex}/>
            <AudioPlayer thumbnail={this.state.thumbnail} podcast={this.state.podcast} episode={this.state.episode} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
