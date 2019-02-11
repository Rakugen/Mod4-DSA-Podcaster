import React, { Component } from 'react';

class Episode extends Component {


  render(){
  return(
    <div onClick={() => this.props.handleEpisodeMenuClick(this.props.id)}>
    <h1>{this.props.title}</h1>
    </div>
    )
  }
}


export default Episode
