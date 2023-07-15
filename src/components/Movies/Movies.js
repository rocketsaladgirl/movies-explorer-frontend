import { useEffect, useState } from 'react';

import './Movies.css';

import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { getCardsAmount, movieFilter } from '../../utils/utils';
import { useDebounce } from '../../hooks/useDebounce';
import { useMoviesContext } from '../../context/CurrentMoviesContext';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Popup from '../Popup/Popup';
import PopupContent from '../PopupContent/PopupContent';


function Movies() {
    const [isLoading, setIsLoading] = useState(false);
    const [allMovies, setAllMovies] = useState([]);
    const [displayedMovies, setDisplayedMovies] = useState([]);
    const [cardsAmount, setCardsAmount] = useState(getCardsAmount());
    const [isMoveButtonVisible, setIsMoveButtonVisible] = useState(true);
    const [searchParams, setSearchParams] = useState({querry: '', includeShorts: false});
    const [serachedMovies, setSearchedMovies] = useState([]);
    const { setSavedMovies } = useMoviesContext();
    const [isEmptyField, setIsEmptyField] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [text, setText] = useState('');
    const debouncedResize = useDebounce(handleResize);


    function handleSearchSubmit(evt) {
        evt.preventDefault();

        const {querry, shorts} = evt.target.elements;

        if (!querry.value) {
            setIsEmptyField(true);
            return;
        }

        setIsEmptyField(false);

        const currentMovieSearch = {querry: querry.value, includeShorts: shorts.checked};

        localStorage.setItem('search', JSON.stringify(currentMovieSearch));
        setSearchParams(currentMovieSearch);
    }

    function handleMoreMovies() {
        const moviesToShow = serachedMovies.slice(displayedMovies.length, displayedMovies.length + cardsAmount.extraCards); 
    
        setDisplayedMovies([...displayedMovies, ...moviesToShow]);
    }

    function handleResize() {
        setCardsAmount(getCardsAmount());
    }


    function handlePopupClose() {
        setIsPopupOpen(false);
        setText('');
    }


    useEffect(() => {
        const search = JSON.parse(localStorage.getItem('search'));
        if (search) setSearchParams(search);

        const storageMovies = JSON.parse(localStorage.getItem('movies'));
        if (storageMovies) {
            setAllMovies(storageMovies);
            return;
        }

        setIsLoading(true);

        moviesApi.getMovies()
            .then(movies => {
                setAllMovies(movies);
                localStorage.setItem('movies', JSON.stringify(movies));
            })
            .catch(err => {
                setIsPopupOpen(true);
                setText(err);
            })
            .finally(() => {
                setIsLoading(false);
            })

    }, [])

    useEffect(() => {
        setIsLoading(true);

        mainApi.getSavedMovies()
            .then(res => {
                setSavedMovies(res);
            })
            .catch(err => {
                setIsPopupOpen(true);
                setText(err);
            })
            .finally(() => {
                setIsLoading(false);
            })

    }, [setSavedMovies])

    useEffect(() => {
        if (!searchParams.querry) return;
    
        const currentSearchedMovies = allMovies.filter(movie => movieFilter(movie, searchParams));
        setSearchedMovies(currentSearchedMovies);

    }, [searchParams, allMovies])

    useEffect(() => {
        setDisplayedMovies(serachedMovies.slice(0, cardsAmount.totalCards));

    }, [cardsAmount, serachedMovies])

    useEffect(() => {
        window.addEventListener('resize', debouncedResize);

        return () => window.removeEventListener('resize', debouncedResize);
    }, [debouncedResize]);


    useEffect(() => {
        setIsMoveButtonVisible(displayedMovies.length < serachedMovies.length);
    }, [displayedMovies, serachedMovies])

    return (
        <main className='movies main-container'>

            <Popup isOpen={isPopupOpen}>
                <PopupContent onClose={handlePopupClose} text={text} />
            </Popup>

            <SearchForm
                searchParams={searchParams}
                handleSubmit={handleSearchSubmit}
                setSearchParams={setSearchParams}
                isEmptyField={isEmptyField}
            />

            {isLoading
                ? <Preloader />
                : <MoviesCardList moviesData={displayedMovies} />
            }

            {
                isMoveButtonVisible
                    ? <button className='movies-list__button' type='button' onClick={handleMoreMovies}>
                        Ещё
                    </button>
                    : null
            }
        </main>
    )
};

export default Movies;
