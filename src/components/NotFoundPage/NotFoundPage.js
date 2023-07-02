import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <section className='not-found'>
            <h2 className='not-found__title'>404</h2>
            <p className='not-found__text'>Страница не найдена</p>
            <Link to='/' className='not-found__button'>Назад</Link>
        </section>
    )
};

export default NotFoundPage;