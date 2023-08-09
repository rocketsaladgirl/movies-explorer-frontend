import React from 'react';

import './AboutMe.css';

import photo from '../../images/foto.jpeg';

function AboutMe() {
    return (
        <section className='about' id='about'>
            <div className='about__container'>
                <h2 className='about__title'>Студент</h2>
                <div className='about__content'>
                    <article className='about__article'>
                        <h3 className='about__name'>Екатерина</h3>
                        <p className='about__description'>Фронтенд-разработчик, 32 года</p>
                        <p className='about__paragraph'>
                            Живу в Москве. Люблю компьютерные игры, книги, путешествия и плавание.  
                            Благодаря курсу Веб-разработчик в Яндекс Практикуме,
                            поняла, что мне интересна разработка. 
                            Надеюсь полученные знания помогут мне достичь успехов в 
                            новой профессии.
                        </p>
                        <a href='https://github.com/rocketsaladgirl' className='about__link' target='_blank' rel="noreferrer">Github</a>
                    </article>
                    <img src={photo} className='about__photo' alt='фото студента'/>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;