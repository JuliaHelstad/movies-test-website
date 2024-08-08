import styles from '../styles/app.module.css';
import { useEffect, useState } from 'react';
import { GetMoviesBySearch } from '../api/data';
import { MovieItem } from '../types/types';
import Movie from './Movie'

const App = () => {
  const [movies, setMovies] = useState<MovieItem[] | null>(null);
  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      if (search) {
        let fetchedMovies = await GetMoviesBySearch(search);
        if (fetchedMovies) {
          setMovies(fetchedMovies);
        }
      }
    }
    fetchMovies();
  }, [search]);

  return (
    <>
    <div className={styles.menu}>
      <input onChange={(e) => setSearch(e.target.value)}></input>
    </div>
    <div className={styles.movieList}>
      {movies && movies.map((movie, key) => <Movie key={key} movie={movie}/>)}
    </div>
    </>
  );
};

export default App;
