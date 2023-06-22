import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import Login from './Login';
import Register from './Register';

import Profile from './Profile';

import Movies from './Movies';
import SavedMovies from './SavedMovies';

import NotFound from './NotFound';

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
          <Route path="/" element={
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
              <NotFound />
            </>
          }/>
        </Routes>  
      </div>
    </div>
  );
}

export default App;
