import { movieApiOptions } from './constants';

class MoviesApi {
    constructor(config) {
        this._baseURL = config.baseURL;
        this._headers = config.headers;
    }

    // метод проверки ответа от сервера (приватный)
    _checkServerResponse(res) {
        if (res.ok) {
            return res.json();
        }
        //при ошибке отклоняем Promise
        return Promise.reject(`Ошибка в запросе: ${res.status}`)
    }

    // получение фильмов с сервера
    getMovies() {
        return fetch(this._baseURL, {
            method: 'GET',
            headers: this._headers
        })
        .then(res => this._checkServerResponse(res));
    }
}

export const moviesApi = new MoviesApi(movieApiOptions);



