import { useEffect, useState } from 'react';

import './SavedMovies.css';

import { mainApi } from '../../utils/MainApi';
import { movieFilter } from '../../utils/utils';
import { useMoviesContext } from '../../context/CurrentMoviesContext';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Popup from '../Popup/Popup';
import PopupContent from '../PopupContent/PopupContent';

function SavedMovies() {
    const [isLoading, setIsLoading] = useState(false);
    const { savedMovies, setSavedMovies } = useMoviesContext();
    const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);
    const [searchParams, setSearchParams] = useState({querry: '', includeShorts: false, isMovieSeached: false});
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [text, setText] = useState('');

    function handleSearchSubmit(evt) {
        evt.preventDefault();
        
        const {querry, shorts} = evt.target.elements;
        const currentMovieSearch = {querry: querry.value, includeShorts: shorts.checked, isMovieSeached: true}; // alreadySeached: true
    
        setSearchParams(currentMovieSearch);
    }

    function handlePopupClose() {
        setIsPopupOpen(false);
        setText('');
    }

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
        const currentSearchedMovies = savedMovies.filter(movie => movieFilter(movie, searchParams));
    
        setSearchedSavedMovies(currentSearchedMovies);
    }, [searchParams, savedMovies])

    return (
        <main className='saved-movies main-container'>

            <Popup isOpen={isPopupOpen}>
                <PopupContent onClose={handlePopupClose} text={text} />
            </Popup>

            <SearchForm
                searchParams={searchParams}
                handleSubmit={handleSearchSubmit}
                setSearchParams={setSearchParams}
                isRequired={false}
            />

            {isLoading
                ? <Preloader />
                : <MoviesCardList moviesData={searchedSavedMovies} isMovieSeached={searchParams.isMovieSeached} /> // isAlreadySeached={searchParams.alreadySeached} 
            }
        </main>
    )
};

export default SavedMovies;