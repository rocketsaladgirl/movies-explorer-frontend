import React from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({moviesList, onSearch}) {
    return (
        <section className='movies'>
            <SearchForm onSearch={onSearch} />
            <MoviesCardList moviesList={moviesList} />
        </section>
    );
}

export default Movies;