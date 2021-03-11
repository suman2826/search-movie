import React, { Component } from 'react';

import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';

export class Landing extends Component {
    render() {
        return (
            <div className="container">
                <SearchForm />
                 <MoviesContainer />
            </div>
        );
    }
}

export default Landing