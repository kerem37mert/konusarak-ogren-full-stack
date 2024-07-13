import React, { useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

//Style
import "./CharCard.style.css";


import { FavContext } from '../../contexts/FavContext';

const CharCard = ({ url }) => {

  const { data, error, isLoading } = useFetch(url, "GET");
  const { favs, setFavs } = useContext(FavContext);

  const handleFavIcon = (id) => {
    if(favs.includes(id)) {
      setFavs(favs.filter(item => item != id));
    } else {
      if(favs.length >= 10) {
        alert("Maksimum 10 favori karakteriniz olabilir");
      } else {
        setFavs([...favs, id]);
      }
    }

    localStorage.setItem("myFavChars", JSON.stringify(favs));
  }

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
          { favs.includes(data.id) ? (
            <FavoriteIcon className="fav-icon" onClick={ () => handleFavIcon(data.id) } />
          ) : (
            <FavoriteBorderIcon className="fav-border-icon" onClick={ () => handleFavIcon(data.id) } />
          ) }
         
      </div>
    )}
    </>
  );
}

export default CharCard;