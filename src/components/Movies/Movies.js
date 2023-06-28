import React from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';

function Movies({movies, onSearch}) {
    return (
        <section className='movies'>
            <SearchForm onSearch={onSearch} />
        </section>
    );
}

export default Movies;