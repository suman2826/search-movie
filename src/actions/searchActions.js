import { SEARCH_MOVIE,FETCH_MOVIES,FETCH_MOVIE,LOADING, POPULAR_MOVIES} from './types';
import axios from 'axios';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};


export const setPopularMovies = result => dispatch => {
    dispatch({

    type: POPULAR_MOVIES,
    payload: result
    })
    
};

export const fetchMovies = text => dispatch => {
    axios.get(`http://api.themoviedb.org/3/search/movie?api_key=c6441a90d447e1197b8eeb6295d9992a&query=${text}`)
    .then(response => dispatch({
        type: FETCH_MOVIES,
        payload: response.data
    }))
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
    axios.get(`http://api.themoviedb.org/3/movie/${id}?api_key=c6441a90d447e1197b8eeb6295d9992a`)
    .then(response => dispatch({
        type: FETCH_MOVIE,
        payload: response.data
    }))
    .catch(err => console.log(err));
};

export const setLoading = () => {
    return {
        type: LOADING
    };
};