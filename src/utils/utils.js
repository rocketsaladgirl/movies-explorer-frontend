import {
    MOBILE_SCREEN_WIDTH,
    TABLET_SCREEN_WIDTH,
    DESKTOP_CARDS_AMOUNT,
    TABLET_CARDS_AMOUNT,
    MOBILE_CARDS_AMOUNT,
    SHORTS_DURATION,
} from './constants';   
  
// Функционал отображения кол-ва карточек на экране
export function getCardsAmount() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= MOBILE_SCREEN_WIDTH) {
      return MOBILE_CARDS_AMOUNT;
    } else if (screenWidth <= TABLET_SCREEN_WIDTH) {
      return TABLET_CARDS_AMOUNT;
    }
  
    return DESKTOP_CARDS_AMOUNT;
}
  
// Функционал отвещающий за фильтрацию фильмов  
function checkMovieDuration(movieDuration, isShortsIncluded, shortsDurationCriteria = SHORTS_DURATION) {
    return isShortsIncluded || (movieDuration > shortsDurationCriteria);
}

function filterMovieByQuerry(movie, searchQuerry) {
    const lowerQuerry = searchQuerry.toLowerCase();
    return movie.nameRU.toLowerCase().includes(lowerQuerry);
}
  
export function movieFilter(movie, { querry, includeShorts }) {
    return checkMovieDuration(movie.duration, includeShorts) && filterMovieByQuerry(movie, querry);
}

// Функционал конвертации длитильности фильма  
export function convertDuration(duration) {
    const hours = Math.trunc(duration / 60);
    const munutes = duration % 60;
    const resultTime = [];
  
    if (hours) resultTime.push(`${hours}ч`);
    if (munutes) resultTime.push(`${munutes}м`);
  
    return resultTime.join(' ');
}