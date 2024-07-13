import React, { useContext } from 'react';

// Styles
import "./Favs.style.css";

import { FavContext } from '../../contexts/FavContext';
import CharCard from '../../components/CharCard';

const Favs = () => {

    const { favs, setFavs } = useContext(FavContext);

    return(
        <div className="favs">
            { favs.length == 0 ? (
                <div>Henüz hiç favori karakterin yok.</div>
            ) :(
                <div>
                    <h1>Favoriler ({ favs.length })</h1>
                    { favs.map((char, index) => (
                        <CharCard key={ index } url={ char } />
                    )) }
                </div>
            ) }      
        </div>
    )
}

export default Favs;