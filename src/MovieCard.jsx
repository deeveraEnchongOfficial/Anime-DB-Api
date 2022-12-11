import React from 'react';

const MovieCard = ({ anime: { key, image, title, type, link, status } }) => {
  
  return (
    <div className="movie" key={key}>
      <div>
        <p>{status}</p>
      </div>
        <div>
          <a href={link} target="_blank"><img src={image !== "N/A" ? image : "https://via.placeholder.com/400"} alt={title} /></a>
        </div>
      <div>
        <span>{type}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;