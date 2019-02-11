import React, { Component } from 'react';

class SearchForm extends Component {
  render(){
  return(
    <div>
    <form>
    Search <input onChange={this.props.handleSearch} value={this.props.search}/>
    </form>
    </div>
    )
  }
}

export default SearchForm
