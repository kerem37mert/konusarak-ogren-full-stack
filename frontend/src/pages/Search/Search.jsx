import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

// Style
import "./Search.style.css";
import CharCard from "../../components/CharCard";

const Search = () => {

    const { data, error, isLoading } = useFetch("https://rickandmortyapi.com/api/character/", "GET");
    const [foundChars, setFoundChars] = useState([]);

    const handleSearch = ({ target }) => {

        if(target.value.length > 2)
            setFoundChars(data.results.filter((item) => 
                item.name.toLowerCase().includes(target.value.toLowerCase())    ||
                item.status.toLowerCase().includes(target.value.toLowerCase())  ||
                item.species.toLowerCase().includes(target.value.toLowerCase()) ||
                item.gender.toLowerCase().includes(target.value.toLowerCase())
            ));
        else 
            setFoundChars([]);
    }

    return(
        <div className="search">
            <div>
                <input type="text" placeholder="Minimum 3 karakter girerek Ara" onChange={ handleSearch } />
                <br />
                <b>{ foundChars.length }</b> karakter bulundu
            </div>
            <div>
                { foundChars.map(char => (
                    <CharCard key={ char.key } url={ char.url } />
                )) }
            </div>
        </div>
    );
}

export default Search;