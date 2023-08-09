import { apiOptions } from './constants';

class MainApi {
    constructor(config) {
        this._baseURL = config.baseURL;
        this._headers = config.headers
    }

    // метод проверки ответа от сервера (приватный)
    _checkServerResponse(res) {
        if (res.ok) {
            return res.json();
        }
        //при ошибке отклоняем Promise
        return Promise.reject(`Ошибка в запросе: ${res.status}`)
    }

    // метод регистрации пользователя
    registerUser(userData) {
        return fetch(`${this._baseURL}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(userData),

        })
        .then(res => this._checkServerResponse(res))
    }

    // авторизация пользователя
    loginUser(userData) {
        return fetch(`${this._baseURL}/signin`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(userData),
        })
        .then(res => this._checkServerResponse(res))
    }

    // получить данные пользователя
    getUserInfo() {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
        .then(res => this._checkServerResponse(res));
    }

    // редактировать данные пользователя
    setUserInfo(userData) {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(userData)
        })
        .then(res => this._checkServerResponse(res));
    }

    // разлогинивание пользователя
    logoutUser() {
        return fetch(`${this._baseURL}/signout`, {
          method: 'GET',
          credentials: 'include',
        })
        .then(res => this._checkServerResponse(res));
    }

    // добавление фильма в сохраненные
    addMovie(movieData) {
        return fetch(`${this._baseURL}/movies`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(movieData),
        })
        .then(res => this._checkServerResponse(res));
    }

    // получение списка сохраненных фильмов
    getSavedMovies() {
        return fetch(`${this._baseURL}/movies`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
        .then(res => this._checkServerResponse(res));
    }

    // удаление фильма из списка сохраненных
    deleteMovie(movieId) {
        return fetch(`${this._baseURL}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',
        })
        .then(res => this._checkServerResponse(res));
    }
}    

export const mainApi = new MainApi(apiOptions);
