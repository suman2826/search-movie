import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router , Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import { setPopularMovies } from './actions/searchActions';


import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import NotFound from './components/home/NotFound';
import axios from 'axios';

import store from './store';

class App extends Component {
  componentDidMount() {
    axios.get('http://api.themoviedb.org/3/movie/popular?api_key=c6441a90d447e1197b8eeb6295d9992a&language=en-US&page=1')
    .then(response => 
    store.dispatch(setPopularMovies(response.data)))
  };
  render() {
    
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
};

export default App;