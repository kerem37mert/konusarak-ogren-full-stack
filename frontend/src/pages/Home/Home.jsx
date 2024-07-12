import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import EpisodeCard from '../../components/EpisodeCard';

// Styles
import "./Home.style.css";
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {
  const { data, error, isLoading } = useFetch("https://rickandmortyapi.com/api/episode", "GET");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const totalEpisodes = data?.results || [];
  const totalPages = Math.ceil(totalEpisodes.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const currentEpisodes = totalEpisodes.slice(startIndex, startIndex + limit);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="home">
      {isLoading ? (
        <div>Yükleniyor</div>
      ) : (
        <div>
          {currentEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} data={episode} />
          ))}
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onNextPage={handleNextPage} 
            onPrevPage={handlePrevPage}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
