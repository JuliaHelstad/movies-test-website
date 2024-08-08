import { useEffect, useState } from 'react';
import { MovieItem } from '../types/types';
import styles from '../styles/movie.module.css';
import arrowDown from '../images/arrowDown.png';
import { GetMovieByTitle } from '../api/data';

const Movie = ({ movie }: { movie: MovieItem }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [movieInfo, setMovieInfo] = useState<MovieItem>(movie);

  useEffect(() => {
    async function fetchExpandedMovie() {
      let fetchedMovie = await GetMovieByTitle(movie.title);
      if (fetchedMovie) {
        setMovieInfo(fetchedMovie);
      }
    }
    fetchExpandedMovie();
  }, [expanded]);

  return (
    <div className={styles.container}>
      <img
        alt={'Image of movie'}
        src={movieInfo.image}
        className={styles.image}
      />
      <div className={styles.shortTextContainer}>
        <p className={styles.title}>{movieInfo.title}</p>
        <p className={styles.year}>{movieInfo.year}</p>
      </div>
      {expanded && (
        <div className={styles.longTextContainer}>
          <p>{movieInfo.plot}</p>
        </div>
      )}
      <div className={styles.buttons}>
        {!expanded && (
          <img
            onClick={() => setExpanded(!expanded)}
            src={arrowDown}
            className={styles.arrow}
          />
        )}
        {expanded && (
          <img
            onClick={() => setExpanded(!expanded)}
            src={arrowDown}
            className={styles.arrowRotate}
          />
        )}
      </div>
    </div>
  );
};

export default Movie;
