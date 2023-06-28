import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox () {
    return (
        <div className='filter'>
            <p className='filter__text'>Короткометражки</p>
            <input className='filter__checkbox' type='checkbox'></input>
        </div>
    );
}

export default FilterCheckbox;