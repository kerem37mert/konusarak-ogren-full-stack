import React from 'react';
import useFetch from '../../hooks/useFetch';
import EpisodeCard from '../../components/Card/EpisodeCard';

// Styles
import "./Home.style.css";

const Home = () => {
  const { data, error, isLoading } = useFetch("https://rickandmortyapi.com/api/episode", "GET");
  console.log(data);

  return (
    <div className="home">
      {
        isLoading ? 
        (<div>Yükleniyor</div>) : 
        (
          <div>
            {data.results.map(episode => (
                <EpisodeCard key={episode.id} data={episode} />
            ))}
          </div>
        )
      }
    </div>
  );
}

export default Home;
