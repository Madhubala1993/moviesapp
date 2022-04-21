import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { API } from "./global.js";

export function MoviesList() {
  const [movies, setMovieList] = useState([]);
  const history = useHistory();

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  useEffect(getMovies, []);

  const deleteMovie = (name) => {
    fetch(`${API}/movies/${name}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getMovies());
  };

  return (
    <div className="movies-list">
      {movies.map(({ name, poster, rating, summary, _id }, index) => (
        <Movie
          key={name}
          deleteButton={
            <IconButton
              sx={{ marginLeft: "auto" }}
              aria-label="delete"
              color="error"
              onClick={() => deleteMovie(name)}
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              color="secondary"
              aria-label="edit-movie"
              onClick={() => history.push(`/movie/edit/${name}`)}
            >
              <EditIcon />
            </IconButton>
          }
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          id={_id}
        />
      ))}
    </div>
  );
}
