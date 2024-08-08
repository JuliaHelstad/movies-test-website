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
  }, [search, setSearch]);

  return (
    <>
    <div className={styles.menu}>
      <h1 className={styles.header1}>Movies what what?</h1>
      <h2 className={styles.header2}>Your favorite place to find movies</h2>
    <div className={styles.search}>
      <p className={styles.searchText}>Search for your movie here:</p>
      <input className={styles.searchField} onChange={(e) => setSearch(e.target.value)}></input>
    </div>
    </div>
    <div className={styles.movieList}>
      {movies && movies.map((movie, key) => <Movie key={key} movie={movie}/>)}
    </div>
    </>
  );
};

export default App;
