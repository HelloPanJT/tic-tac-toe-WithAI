import React, {Component} from 'react';
import update from 'react-addons-update';
import style from './GridStyle';

class GridButton extends Component {
  constructor() {
    super();
    this.state = {
      value: null
    }
  }
  
  render() {
    var newStyle = update(style, {$merge: {backgroundColor: this.props.color}});
    return (
      <span>
        <button 
         style={newStyle} 
         onClick={() => this.props.onClick()}>
           {this.props.value}
        </button>
      </span>
    )
  }
}
export default GridButton