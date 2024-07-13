import React from 'react';

// Style
import "./EpisodeCard.style.css";
import { Link } from 'react-router-dom';

const EpisodeCard = ({ data }) => {
  return (
    <div className="episode-card">
      <p>ID: {data.id}</p>
      <h2>Name: {data.name}</h2>
      <p>Air Date: {data.air_date}</p>
      <p>Episode: {data.episode}</p>
      <Link className="episode-link" to={`/episode/${data.id}`}>Git</Link>
    </div>
  );
}

export default EpisodeCard;