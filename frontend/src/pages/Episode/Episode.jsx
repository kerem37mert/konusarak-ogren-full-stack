import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

// Style
import "./Episode.style.css";

const Episode = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useFetch(`https://rickandmortyapi.com/api/episode/${id}`, "GET");
    console.log(data)
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const totalChars =  data.characters || [];
    const totalPages = Math.ceil(totalChars.length / limit);
    const startIndex = (currentPage - 1) * limit;
    const currentChars = totalChars.slice(startIndex, startIndex + limit);

    return(
        <div>
            {isLoading ? (
                <div>Yükleniyor</div>
            ) : (
                <div>
                    {currentChars.map((char, index) => (
                        <div key={index}>asfasf</div> 
                    ))}
                </div>
            ) }
        </div>
    );
}

export default Episode;