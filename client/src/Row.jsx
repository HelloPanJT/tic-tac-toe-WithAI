import React, {Component} from 'react';
import GridButton from './GridButton';
import BoardParams from './BoardParams';
import {Grid, Cell} from 'react-mdl'
class Row extends Component {
  render() {
    var row = [];
    var num = 12 / BoardParams.WIDTH;
    for (var i = 0; i < BoardParams.WIDTH; i++) {
      row.push(<Cell col={num}><GridButton/></Cell>);
    }
    return(
      <div>
        <Grid>
          {row}
        </Grid>
      </div>
    )
  }
}

export default Row;