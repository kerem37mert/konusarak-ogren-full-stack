import React, { createContext, useState } from "react";
import { json } from "react-router-dom";

const FavContext = createContext();

const FavProvider = ({ children }) => {

    const [favs, setFavs] = useState([]);

    return(
        <FavContext.Provider value={{ favs, setFavs }}>
            { children } 
        </FavContext.Provider>
    );
}

export {
    FavContext,
    FavProvider
}