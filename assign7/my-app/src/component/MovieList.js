// src/components/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/pathan.jpeg';  // Importing images
import image2 from '../images/drishyam.jpeg';
import image3 from '../images/jumanji.jpeg';
import image4 from '../images/Kick.jpeg';
import image5 from '../images/Acharya.jpeg';


// Import more images as needed

const movies = [
  { id: 1, title: 'Movie 1', imgSrc: image1 },
  { id: 2, title: 'Movie 2', imgSrc: image2 },
  { id: 3, title: 'Movie 3', imgSrc: image3 },
  { id: 4, title: 'Movie 4', imgSrc: image4 },
  { id: 5, title: 'Movie 5', imgSrc: image5 },
  // Add more movie objects with corresponding image imports
];

const MovieList = () => (
  <div className="movie-list">
    {movies.map((movie) => (
      <div key={movie.id} className="movie-item">
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.imgSrc} alt={movie.title} />
          <h3>{movie.title}</h3>
        </Link>
      </div>
    ))}
  </div>
);

export default MovieList;