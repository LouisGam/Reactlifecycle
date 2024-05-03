import { useState } from "react";
import "./films.page.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers.js";
import { getFilmStats } from "../helpers/film.helpers.js";

function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredFilms = filterFilmsByDirector(films, searchDirector);
  const allDirectors = getListOf(films, "director");
  const { avg_score, latest, total } = getFilmStats(filteredFilms);


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
              setSearchDirector(event.target.value);
            }}
          >
            <option value="All"></option>
            {allDirectors.map((director) => {
              return <option value={director}>{director}</option>;
            })}
          </select>
        </div>
      </form>
      <div className="filmStats">
        <div>
          <span># Of Films </span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating </span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film </span>
          <span>{latest}</span>
        </div>
      </div>
      <p>Created By: Louis Gambardella</p>
      <ul>
        {filteredFilms.map((film) => {
          return (
            <li key={film.id}>
              <div className="movie-left">
                <h2>
                  <Link to={`film/${film.id}`}>{film.title}</Link>
                </h2>
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
