import React from 'react';
import { useHistory } from 'react-router-dom';

const MovieCard = props => {
  const history = useHistory()

  const { title, director, metascore, stars } = props.movie; 

  const navigateToMovie = (e) => {
    
    history.push(`/movies/${0}`)}

  const clickEdit = (e) => {
    e.stopPropagation()
    history.push(`/update-movie/${0}`) 
  }

  return (
    <div className="movie-card" onClick={navigateToMovie}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <button 
      className='edit-button'
      onClick={clickEdit}
      >
      Edit
      </button>
    </div>
  );
};

export default MovieCard;
