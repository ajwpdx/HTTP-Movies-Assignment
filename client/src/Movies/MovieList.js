import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {
        movies.map(movie => (
            <MovieCard movie={movie} />
        ))
      }
    </div>
  );
}

export default MovieList;
