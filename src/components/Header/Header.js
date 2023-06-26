import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import Navigation from '../Navigation/Navigation';

import logo from '../../images/logo/logo.svg';
import profile from '../../images/logo/profile.svg';
import menu from '../../images/logo/menu.svg';

const isLoggedIn = true; // задаем состояние по умолчанию

function Header() {
    const [isNavigationClick, setIsNavigationClick] = React.useState(false); // стейт отвечающий за проверку статуса скрытого меню навигации

    function handleClose() {
        setIsNavigationClick(false);
    }

    function handleOpen() {
        setIsNavigationClick(true);
    }

    return (
        <>
            {!isLoggedIn ? (
                <header className='header' id='header'>
                    <Link to='/' className='header__logo form__logo'>
                        <img src={logo} alt='логотип'/>
                    </Link>
                    <nav className='header__auth-button-container'>
                        <Link to='/signup' className='header__button'>Регистрация</Link>
                        <Link to='/signin' className='header__button header__button-color'>Войти</Link>
                    </nav>
                </header>
            ) : (
                <header className='header' id='header'>
                    <Link to='/' className='header__logo form__logo'>
                        <img src={logo} alt='логотип'/>
                    </Link>
                <nav className='header__film-button-container'>
                  <Link to='/movies' className='header__button'>Фильмы</Link>
                  <Link to='/saved-movies' className='header__button'>Сохранённые фильмы</Link>
                </nav>
                <div className='header__auth-button-container'>
                  <Link to='/profile' className='header__profile-button'>
                    <img src={profile} alt="изображение значка аккаунта" />
                  </Link>
                  <button className='header__menu-button' onClick={handleOpen}>
                    <img src={menu} alt='меню'/>
                  </button>
                </div>
                {isNavigationClick ? <Navigation handleClose={handleClose} /> : ''}
              </header>
            )}
        </>
    );
}

export default Header;
