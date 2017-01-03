import React, {Component} from 'react';
import Row from './Row';
import BoardParams from './BoardParams';
import {Grid, Cell} from 'react-mdl'
import Card from 'material-ui/Card'
class Layer extends Component {
  render() {
    var layer = [];
    for (var i = 0; i < BoardParams.HEIGHT; i++) {
      layer.push(<Row/>);
    }
    return(
      <Card>
        <Grid>
          <Cell col={1}/>
          <Cell col={12}>
            {layer}
          </Cell>
          <Cell col={1}/>
        </Grid>
      </Card>
    )
  }
}

export default Layer;