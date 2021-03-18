import React, { Component } from 'react';

import { connect } from 'react-redux';

import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
    render() {
      // console.log('dfdfdf');
        const { movies } = this.props;
        const movies_results = movies.results || [];
        let content = '';
        if(movies_results.length == 0){

          content = <h2>No such movie exist please enter the name correctly!!!</h2>
        }
        else {
    content =
      movies_results.length > 0 ? movies_results.map((movie,index) => <MovieCard key={index} movie={movie} />) :null;
        }
    return <div className="row">{content}</div>;

    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
    
  });

export default connect(mapStateToProps)(MoviesContainer);
