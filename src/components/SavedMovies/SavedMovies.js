import React from 'react';

import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({moviesList}) {
    return (
        <section className='saved-movies'>
            <SearchForm />
            <MoviesCardList moviesList={moviesList} />
        </section>
    );
}

export default SavedMovies;