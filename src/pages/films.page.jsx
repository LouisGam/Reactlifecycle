import { useState } from "react";
import "./films.page.jsx";
import { useEffect } from "react";

function FilmsPage() {
  const [films, setFilms] = useState([]);
    const [searchDirector, setSearchDirector] = useState("");
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

    const  filteredFilms = filterFilmsByDirector(films, searchDirector);
    const allDirectors = getListOf(films, "director");


  return (
    <>
      <h1>Studio Films List</h1>
      <form>
        <div className="form-group">
          <label htmlFor="searchDirector"></label>  
          <select 
          value={searchDirector}
          name="serachDirector"
            id="searchDirector"
            onChange={(event) => {
                setSearchDirector(event.target.value)}}>
            <option value="All"></option>
            {allDirectors.map((director) => {
                return<option value={director}>{director}</option>})}
              
          </select>
        </div>
      </form>
      <p>Created By: Louis Gambardella</p>
      <ul>
        {filteredFilms.map((film) => {
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

export default FilmsPage;
