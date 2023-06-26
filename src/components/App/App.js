import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import Login from '../Login/Login';
import Register from '../Register/Register';

import Profile from '../Profile/Profile';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {

  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route path="/signin" element={
            <>
              <Login />
            </>  
          }/>
          <Route path="/signup" element={
            <>
              <Register />
            </> 
          }/>
          <Route exact path="/" element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }/>
          <Route path="/profile" element={
            <>
              <Header />
              <Profile />
              <Footer />
            </>
          }/>
          <Route path="/movies" element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          }/>
          <Route path="/saved-movies" element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }/>
          <Route path="*" element={
            <>
              <NotFoundPage />
            </>
          }/>
        </Routes>  
      </div>
    </div>
  );
}

export default App;
