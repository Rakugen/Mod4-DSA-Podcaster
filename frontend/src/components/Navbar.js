import React, { Component } from 'react';

class Navbar extends Component {
  render(){
  return(
    <nav>
  <div className="nav-wrapper">
    <a href="#" className="brand-logo">Logo</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href=''>Playlist</a></li>
      <li><a href=''>Update User Info</a></li>
      <li><a href=''>Logout</a></li>
    </ul>
  </div>
</nav>
    )
  }
}


export default Navbar
