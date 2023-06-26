import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

import profile from '../../images/logo/profile.svg';

function Navigation({handleClose}) {
    return (
        <div className='navigation'>
            <div className='navigation__block' onClick={handleClose}></div> 
            <div className='navigation__container'>
                <button className='navigation__close-button' onClick={handleClose}></button>
                <nav className='navigation__menu'>
                    <Link to='/' className='navigation__link' onClick={handleClose}>Главная</Link>
                    <Link to='/movies' className='navigation__link' onClick={handleClose}>Фильмы</Link>
                    <Link to='/saved-movies' className='navigation__link' onClick={handleClose}>Сохранённые фильмы</Link>
                </nav>
                <Link to='/profile' className='navigation__profile-button' onClick={handleClose}>
                    <img src={profile} alt='изображение значка аккаунта'/>
                </Link>
            </div>
        </div>
    );
}

export default Navigation;