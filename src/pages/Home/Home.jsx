import { useState, useEffect } from 'react';
import { getPopularMovie } from '../../servises/API';
import MoviesList from '../../components/MoviesList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {    
      getPopularMovie().then(films => {
        setMovies(films);
      });    
  }, []);

  return (
    <main >
      <h2 >Trending today</h2>
      {movies && <MoviesList films={movies} />}
    </main>
  );
}