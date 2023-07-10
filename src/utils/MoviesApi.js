import { BEATFILM_URL } from './constants.js'

class MoviesApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    // метод проверки ответа от сервера (приватный)
    _checkServerResponse(res) {
        if (res.ok) {
            return res.json();
        }
        //при ошибке отклоняем Promise
        return Promise.reject(`Ошибка в запросе: ${res.status}`)
    }

    // получение списка фильмов
    getMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            method: 'GET',
            headers: this._headers
        })
        .then(res => this._checkServerResponse(res));
    };
}

// Экземпляр класса Апи beatfilm
const moviesApi = new MoviesApi({
    baseUrl: BEATFILM_URL,
});

export default moviesApi;



