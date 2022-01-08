import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const history = useHistory();

  return (
    <div className="addmovie-container">
      <TextField id="name" label="Enter movie name" variant="standard" onChange={(event) => {
        setName(event.target.value);
      }} />
      <TextField id="poster" label="Enter Poster URL" variant="standard" onChange={(event) => {
        setPoster(event.target.value);
      }} />
      <TextField id="rating" label="Enter movie rating" variant="standard" onChange={(event) => {
        setRating(event.target.value);
      }} />
      <TextField id="summary" label="Enter movie summary" variant="standard" onChange={(event) => {
        setSummary(event.target.value);
      }} />

      <Button variant="outlined" onClick={() => {
        const newMovie = {
          name,
          poster,
          rating,
          summary,
        };
        setMovieList([...movieList, newMovie]);
        history.push("/movies");
      }}>Add Movie</Button>
    </div>
  );
}
