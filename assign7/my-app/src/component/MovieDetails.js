// src/components/MovieDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import image1 from '../images/Bholaa.jpeg';  // Importing images
import image2 from '../images/drishyam.jpeg';
import image3 from '../images/jumanji.jpeg';
import image4 from '../images/Kick.jpeg';
import image5 from '../images/Acharya.jpeg';

// Import more images as needed

const movies = [
{ id: 1, title: 'Movie 1', imgSrc: image1, description: 'Description of Movie 1' },
{ id: 2, title: 'Movie 2', imgSrc: image2, description: 'Description of Movie 2' },
{ id: 3, title: 'Movie 3', imgSrc: image3, description: 'Description of Movie 3' },
{ id: 4, title: 'Movie 4', imgSrc: image4, description: 'Description of Movie 4' },
{ id: 5, title: 'Movie 5', imgSrc: image5, description: 'Description of Movie 5' },
  // Add more movie objects with corresponding image imports
];

const MovieDetails = () => {
const { id } = useParams();
const movie = movies.find((movie) => movie.id === parseInt(id));

if (!movie) {
    return <h2>Movie not found</h2>;
}

return (
    <div className="movie-details">
    <img width='25px'height='100px' src={movie.imgSrc} alt={movie.title} />
    <h1>{movie.title}</h1>
    <p>{movie.description}</p>
    <Link to={`/book/${movie.id}`}>Book Seat</Link>
    </div>
);
};

export default MovieDetails;