// Настройки api
export const apiOptions = {
    baseURL: 'http://localhost:3000',
    // baseURL: 'https://api.rocketsaladgirl.nomoredomains.rocks',
    headers: {
      'Content-Type': 'application/json',
    }
};

export const movieApiOptions = {
    baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'Content-Type': 'application/json'
    }
};

// База с фильмами
export const BEATFILM_URL = 'https://api.nomoreparties.co';

//Размеры экранов устройств
export const MOBILE_SCREEN_WIDTH = 600;
export const TABLET_SCREEN_WIDTH = 900;

// Количество карточек
export const DESKTOP_CARDS_AMOUNT = {totalCards: 12, extraCards: 3};
export const TABLET_CARDS_AMOUNT = {totalCards: 8, extraCards: 2};
export const MOBILE_CARDS_AMOUNT = {totalCards: 5, extraCards: 2};

// Системные сообщения
export const CHANGE_SUCCESS = 'Данные профиля успешно обновлены';
export const EMPTY_FIELD = 'Нужно ввести ключевое слово';

//Длительность короткого фильма
export const SHORTS_DURATION = 40;

// Паттерн
export const PATTERN_EMAIL = '[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.{1,1}[a-z]{2,}';