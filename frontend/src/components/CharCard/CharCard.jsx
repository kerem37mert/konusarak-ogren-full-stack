import React from 'react';
import useFetch from '../../hooks/useFetch';

//Style
import "./CharCard.style.css";

const CharCard = ({ url }) => {

  const { data, error, isLoading } = useFetch(url, "GET");

  return (
    <>
      { isLoading ? (
      <div>Yükleniyor</div>
    ) : (
      <div className="char-card">
          <img src={ data.image } />
          <p className="name">{ data.name }</p>
          <p>{ data.status }</p>
          <p>{ data.gender }</p>
          <p>{ data.species }</p>
      </div>
    )}
    </>
  );
}

export default CharCard;