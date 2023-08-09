import { useEffect, useState } from 'react';

import './SearchForm.css'

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import { EMPTY_FIELD } from '../../utils/constants';

function SearchForm({ searchParams, handleSubmit, setSearchParams, isRequired = true, isEmptyField, handleShortsClick }) {
    const [searchValue, setSearchValue] = useState(searchParams.querry);
    const [isShortsFilmChecked, setIsShortsFilmChecked] = useState(searchParams.includeShorts);

    function handleChange({ target }) {
        setSearchValue(target.value);
    }

    function handleShortsCheck() {
        setIsShortsFilmChecked(!isShortsFilmChecked);
        handleShortsClick();
    }

    useEffect(() => {
        setSearchValue(searchParams.querry);
        setIsShortsFilmChecked(searchParams.includeShorts);
    }, [searchParams])

    return (
        <section className='search'>
            <div className='search__container'>
                <form className='search__form' onSubmit={handleSubmit} noValidate>
                    <fieldset className='search__fieldset'>
                        <input
                            className='search__input'
                            name='querry'
                            type='text'
                            placeholder='Фильм'
                            onChange={handleChange}
                            value={searchValue}
                            required={isRequired}
                        />
                        <button className='search__button' type='submit'/>
                    </fieldset>
                    <span className='search__error'>
                        {
                            isEmptyField ? EMPTY_FIELD : ''
                        }
                    </span>
                    <FilterCheckbox
                        checkHandler={handleShortsCheck}
                        isChecked={isShortsFilmChecked}
                    />
                </form>
                <span className='search__big-error'>
                    {
                        isEmptyField ? EMPTY_FIELD : ''
                    }
                </span>
            </div>
        </section>
    )
};

export default SearchForm;