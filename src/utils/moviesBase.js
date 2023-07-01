/*Временная база данных с фильмами*/
import movie_poster from '../images/movie_poster.png';
import movie_poster_2 from '../images/movie_poster_2.png';
import movie_poster_3 from '../images/movie_poster_3.png';
import movie_poster_4 from '../images/movie_poster_4.png';
import movie_poster_5 from '../images/movie_poster_5.png';
import movie_poster_6 from '../images/movie_poster_6.png';

const moviesBase = [
  {
    '_id': '1',
    'title': '33 слова о дизайне',
    'duration': '1ч 47м',
    'poster': movie_poster,
  },

  {
    '_id': '2',
    'title': '33 слова о дизайне',
    'duration': '1ч 47м',
    'poster': movie_poster_2,
  },

  {
    '_id': '3',
    'title': '33 слова о дизайне',
    'duration': '1ч 47м',
    'poster': movie_poster_3,
    'saved': true,
  },

  {
    '_id': '4',
    'title': '33 слова о дизайне',
    'duration': '1ч 47м',
    'poster': movie_poster_4,
    'saved': true,
  },

  {
    '_id': '5',
    'title': '33 слова о дизайне',
    'duration': '1ч 47м',
    'poster': movie_poster_5,
    'saved': true,
  },

  {
    '_id': '6',
    'title': '33 слова о дизайне',
    'duration': '1ч 47м',
    'poster': movie_poster_6,
  },

]

export default moviesBase;