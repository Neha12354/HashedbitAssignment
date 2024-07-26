// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList.js';
import MovieDetails from './components/MovieDetails.js';
import BookingForm from './components/BookingForm.js';
import ConfirmationPage from './components/ConfirmationPage.js';
import './App.css'; // Add your styles here

const App = () => (
<Router>
    <div className="App">
    <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation/:id" element={<ConfirmationPage />} />
    </Routes>
    </div>
</Router>
);

export default App;