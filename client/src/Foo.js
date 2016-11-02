import React, { Component } from 'react';
import { Link } from 'react-router'
import logo from './logo.svg';
import request from 'superagent';
class Foo extends Component {
  constructor() {
    super();
    this.state = { movie: []}
  }
  componentDidMount() {
    var self = this;
    var movieId=this.props.params.movieId;
    var reqRoute='/api/movies/'+movieId;
    request
     .get(reqRoute)
     .set('Accept', 'application/json')
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log('Oh no! error', err);
       } else {
         self.setState({movie: res.body});
       }
     });
  }
  render(){
      return <Root movie={this.state.movie}/>
  }
}

class Root extends Component {
  render() {
    var movie=this.props.movie;
    return (
        <ul>
          <li>movieId: {movie.movieId}</li>
          <li>releaseYear: {movie.releaseYear}</li>
          <li>avgRating: {movie.avgRating}</li>
          <li>mpaa: {movie.mpaa}</li>
          <li>genres: {movie.genres} </li>
          <li>plotSummary: {movie.plotSummary} </li>
          <Link to={`/`}>back to home</Link>
          <div>
            <a href={'http://www.imdb.com/title/tt'+movie.movieId} target="_blank">go to imdb</a>
          </div>
        </ul>
    );
  }
}

export default Foo;
