import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

// Style
import "./Episode.style.css";

// Components
import CharCard from '../../components/CharCard';
import Pagination from '../../components/Pagination';

const Episode = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useFetch(`https://rickandmortyapi.com/api/episode/${id}`, "GET");
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const totalChars =  data.characters || [];
    const totalPages = Math.ceil(totalChars.length / limit);
    const startIndex = (currentPage - 1) * limit;
    const currentChars = totalChars.slice(startIndex, startIndex + limit);

    
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    }

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    }
    

    return(
        <div className="episode">
            {isLoading ? (
                <div>Yükleniyor</div>
            ) : (
                <div>
                    {currentChars.map((char, index) => (
                        <CharCard key={index} url={char} />
                    ))}
                    <Pagination 
                        currentPage={ currentPage } 
                        totalPages={ totalPages } 
                        onNextPage={ handleNextPage } 
                        onPrevPage={ handlePrevPage }
                    />
                </div>
            ) }
        </div>
    );
}

export default Episode;