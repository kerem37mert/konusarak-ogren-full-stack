import React, { useContext, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Alert from '@mui/material/Alert';

//Style
import "./CharCard.style.css";


import { FavContext } from '../../contexts/FavContext';

const CharCard = ({ url }) => {

  const { data, error, isLoading } = useFetch(url, "GET");
  const { favs, setFavs } = useContext(FavContext);
  const [maxCharErr, setMaxCharErr] = useState(false);

  const handleFavIcon = () => {
    if(favs.includes(url)) {
      setFavs(favs.filter(item => item != url));
    } else {
      if(favs.length >= 10) {
        setMaxCharErr(true);
      } else {
        setFavs([url, ...favs]);
      }
    }
  }

  useEffect(() => localStorage.setItem("myFavChars", JSON.stringify(favs)), [favs]);

  return (
    <>
      { isLoading ? (
      <div>Yükleniyor</div>
    ) : (
      <div className="char-card">
          { maxCharErr && (
            <Alert variant="filled" severity="error">Maksiumu 10 adet favori karakteriniz olabilir</Alert>
          ) }
          <img src={ data.image } />
          <p className="name">{ data.name }</p>
          <p>{ data.status }</p>
          <p>{ data.gender }</p>
          <p>{ data.species }</p>
          { favs.includes(data.url) ? (
            <FavoriteIcon className="fav-icon" onClick={ () => handleFavIcon() } />
          ) : (
            <FavoriteBorderIcon className="fav-border-icon" onClick={ () => handleFavIcon() } />
          ) }
         
      </div>
    )}
    </>
  );
}

export default CharCard;