import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ year, title, summary, poster, genres, ratings}){
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
      <div className="movie_info">
        <div className="movie_left">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <ul className="genres">{genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}</ul>
        </div>
        <h4 className="ratings">{ratings}</h4>
      </div>
      <h5 className="moviev_summary">{summary.slice(0, 140)}...</h5>
      </div>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;