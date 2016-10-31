import React, { Component } from 'react';
import { Link } from 'react-router'
import request from 'superagent';

class RootContainer extends Component {
  constructor() {
    super();
    this.state = { message: []}
  }
  componentDidMount() {
    var self = this;
    request
     .get('/api/movies')
     .set('Accept', 'application/json')
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log('Oh no! error', err);
       } else {
         self.setState({message: res.body.movieList});
       }
     });
  }
   render() {
      return <Root message={this.state.message} />;
   }
}

var amazingInlineJsStyle = {
  border: '1px solid purple',
  padding: '10px',
  backgroundColor: '#ffffcc'
}

class Root extends Component {
  render() {
    var movieList=this.props.message.map((movie) =>
           <ul>
             <li>Title: {movie.title}</li>
             <li>releaseYear: {movie.releaseYear}</li>
             <li>avgRating: {movie.avgRating}</li>
             <Link to={'/foo/'+movie.movieId}>more detail</Link>
           </ul>
         )
    return (
        <div className="Root">{movieList}</div>
    );
  }
}
export default RootContainer;
