import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [films, setFilms] = useState(["Godzilla"]);

    useEffect(() => {
      fetch(`https://studioghibliapi-d6fc8.web.app/films`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setFilms(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);


  return (
    <>
      <h1>Studio Films List</h1>
      <p>Created By: Louis Gambardella</p>
      <ul>
        {films.map((film) => {
          return (
            <li key={film.id}>
              <div className="movie-left">
              <h2>{film.title}</h2>
              <img src={film.image} alt={`${film.title} banner`} />
              </div>
              <div className="movie-right">
                <p>{film.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
