import { MovieItem } from '../types/types';

export const GetMoviesBySearch = async (title: string) => {
  let movieList: MovieItem[] | null = null;

  try {
    //TODO: Fix environment variable for key
    const response: any = await fetch(
      `http://www.omdbapi.com/?s=${title}&apikey=8165db23`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();

    if (result == null) {
      return null;
    }

    const movieList = result.Search.map((movie: any) => {
      return ParseMovie(movie);
    });

    return movieList;
  } catch (error: any) {
    return null;
  }
};

export const GetMovieByTitle = async (title: string) => {
  let movie: MovieItem | null = null;

  try {
    //TODO: Fix environment variable for key
    const response: any = await fetch(
      `http://www.omdbapi.com/?t=${title}&apikey=8165db23`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();

    if (result == null) {
      return null;
    }

    movie = ParseMovie(result);
  } catch (error: any) {
    return null;
  }

  return movie;
};

const ParseMovie = (data: any): MovieItem => {
  const movie: MovieItem = {
    imdbId: data.imdbID,
    title: data.Title,
    year: data.Year,
    image: data.Poster,
    rated: data.Rated,
    released: data.Released,
    genre: data.Genre,
    director: data.Director,
    actors: data.Actors,
    plot: data.Plot,
    language: data.Language,
  };
  return movie;
};
