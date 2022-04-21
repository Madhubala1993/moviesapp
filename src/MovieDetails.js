import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { API } from "./global";

export function MovieDetails() {
  const [movie, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(`${API}/movies/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  useEffect(getMovie, []);

  const { id } = useParams();
  const history = useHistory();

  return (
    <div className="movie-details">
      <iframe width="100%" height="500px" src={movie.trailer}></iframe>
      <div className="movie-specs">
        <h3 className="movie_name">{movie.name}</h3>
        <p className="movie_rating"> ⭐ {movie.rating}</p>
      </div>
      <p className="movie_summary">{movie.summary}</p>
      <Button
        variant="outlined"
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIosIcon />}
      >
        Back
      </Button>
    </div>
  );
}
