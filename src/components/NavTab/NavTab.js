import React from 'react';

import { Link } from 'react-router-dom';

import './NavTab.css';

function NavTab() {
    return(
        <nav className='nav'>
            <Link to='project' className='nav__link' smooth={true} duration={1000}>О проекте</Link>
            <Link to='techs' className='nav__link' smooth={true} duration={1000}>Технологии</Link>
            <Link to='about-me' className='nav__link' smooth={true} duration={1000}>Студент</Link>
        </nav>
    );
}

export default NavTab;