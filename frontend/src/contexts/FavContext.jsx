import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

const FavContext = createContext();

const FavProvider = ({ children }) => {

    const [favs, setFavs] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("myFavChars"))
            setFavs(JSON.parse(localStorage.getItem("myFavChars")));
    }, []);

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