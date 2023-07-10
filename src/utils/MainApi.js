class MainApi {
    constructor(config) {
        this.baseURL = config.baseURL;

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
    registerUser({ name, email, password }) {
        return fetch(`${this._baseURL}/signup`, {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),

        })
        .then(res => this._checkServerResponse(res))
    }

    // метод авторизации пользователя
    loginUser({ email, password }) {
        return fetch(`${this._baseURL}/signin`, {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(res => this._checkServerResponse(res))
    }

    // получить данные пользователя
    getUserInfo() {
        const token = localStorage.getItem('jwt');

        return fetch(`${this.baseURL}/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            method: 'GET',
        })
        .then(res => this._checkServerResponse(res));
    }

    // редактировать данные пользователя
    setUserInfo({ name, email }) {
        const token = localStorage.getItem('jwt');

        return fetch(`${this.baseURL}/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            method: 'PATCH',
            body: JSON.stringify({
                name: name,
                email: email,
            })
        })
        .then(res => this._checkServerResponse(res));
    }

    // добавление фильма в сохраненные
    addMovieCard(data) {
        const {
            country,
            director,
            duration,
            year,
            description,
            image,
            trailerLink,
            id,
            nameRU,
            nameEN,
        } = data;

        const token = localStorage.getItem('jwt');

        return fetch(`${this.baseURL}/movies`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({
                    country,
                    director,
                    duration,
                    year,
                    description,
                    image: 'https://api.nomoreparties.co'.baseURL + image.url,
                    trailerLink,
                    thumbnail: 'https://api.nomoreparties.co'.baseURL + image.formats.thumbnail.url,
                    movieId: id,
                    nameRU,
                    nameEN,
            }),
        })
        .then(res => this._checkServerResponse(res));
    }

    // получение списка сохраненных фильмов
    getAllSavedMovies() {
        const token = localStorage.getItem('jwt');

        return fetch(`${this.baseURL}/movies`, {
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => this._checkServerResponse(res));
    }

    // удаление фильма из списка сохраненных
    removeMovieCard(movie) {
        const token = localStorage.getItem('jwt');

        return fetch(`${this.baseURL}/movies/${movie._id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        })
        .then(res => this._checkServerResponse(res));
    }

}
//Данные для API-config
const apiConfig = {
    baseURL: 'http://localhost:3000', // базовый url, было адрес фронтэнда
};

const mainApi = new MainApi(apiConfig);

export default mainApi;