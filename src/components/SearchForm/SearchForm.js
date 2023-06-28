import React from 'react';

import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch }) {
    return (
        <section className='search'>
            <div className='search__container'>
                <form className='search__form'>
                    <input className='search__input' id='search-input' type='text' placeholder='Фильм' required></input>
                    <button className='search__button' type='submit' onClick={onSearch}></button>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    );
}

export default SearchForm;