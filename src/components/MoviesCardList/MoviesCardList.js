import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesData, isMovieSeached }) {
    const location = useLocation();

    return (
        <section className='movies-container'>
            {
                moviesData.length > 0
                    ? <ul className='movies-list'>
                        {
                            moviesData.map((movie) => (
                                <MoviesCard
                                    key={
                                        location.pathname === '/movies'
                                            ? movie.id
                                            : movie._id
                                        }
                                    movieData={movie}
                                />
                            ))
                        }
                    </ul>
                    : <span className='movies-list__error'>
                        {
                            isMovieSeached
                                ? 'Данные не найдены'
                                : ''
                        }
                    </span>
            }
        </section>
    )
}


export default MoviesCardList;