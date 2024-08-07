import { MovieItem } from '../types/types'

export const GetMovieByTitle = async (title: string) => {
  let movieByTitle: MovieItem | null = null;
  
const key = process.env.MOVIE_API_KEY;
  try {
    //TODO: Fix environment variable 
    const response: any = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=8165db23`)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const result = await response.json()

    if (result == null){
        return null;
    }

    movieByTitle = ParseMovie(result)
   

  } catch (error: any) {
    console.error('Error fetching data:', error.message)
  }
  return movieByTitle
}

const ParseMovie = (data: any): MovieItem => {
  const product: MovieItem = {
    imdbId: data.imdbID,
    title: data.Title,
    year: data.Year,
    image: data.Poster,
    rated: data.Rated,
    released: data.Released,
    genre: data.Genre,
    director: data.Director,
    Actors: data.Actors,
    plot: data.Plot,
    language: data.Language,
  }
  return product
}