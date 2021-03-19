import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';


import { fetchMovie, setLoading } from '../../actions/searchActions';

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const {movie } = this.props;
    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.original_title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Released:</strong> {movie.release_date}
              </li>
              <li className="list-group-item">
                <strong>Vote Count:</strong> {movie.vote_count}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> <StarRatings rating={movie.vote_average} starDimensions="40px"
                starSpacing="0px" starDimension="30px" numberOfStars={10} starRatedColor='yellow' starEmptyColor='white' />

              </li>
              <li className="list-group-item">
                <strong>Tagline:</strong> {movie.tagline}

              </li>
              <li className="list-group-item">
                <strong>Overview:</strong> {movie.overview}

              </li>
            </ul>
          </div>
        </div>
      </div>
    );
    var content;
    if(movie.original_title){
      content = movieInfo;
    }
    else {
      content = <h2 style={{textAlign: 'center'}}>No such Movie ID exists!!</h2>
    }
    
    return <div>{content}</div>;

  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie
});

export default connect(
  mapStateToProps, { fetchMovie, setLoading }
)(Movie);