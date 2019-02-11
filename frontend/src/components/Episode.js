import React, { Component } from 'react';

class Episode extends Component {


  render(){
  return(
    <div onClick={() => this.props.handleEpisodeMenuClick(this.props.id)}>
    <li className="collection-item">
    <div className='collapsible-header'>
    {this.props.title}
    </div>
    <div className="collapsible-body">
    <span>{this.props.description}</span>
    </div>
    </li>
    </div>
    )
  }
}


export default Episode
