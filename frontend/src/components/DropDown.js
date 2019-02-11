import React, { Component } from 'react';


class DropDown extends Component {
  render(){
  return(
    <div>
    <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
    </div>
    )
  }
}


export default DropDown
