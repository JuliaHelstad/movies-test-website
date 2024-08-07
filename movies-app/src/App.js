import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import { GetMovieByTitle } from './api/data.ts';


function App() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      let film = await GetMovieByTitle("Guardians")
      console.log(film)
    }
    fetchMovie()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <div>
         {}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
