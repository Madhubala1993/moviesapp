import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export function AddMovie() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie= () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    // setMovieList([...movieList, newMovie]);
    // history.push("/movies");

    fetch(`https://61e688bcce3a2d0017359229.mockapi.io/movies`, {
     method: "POST" ,
     body : JSON.stringify(newMovie),
     headers:{"Content-Type": "application/json"}
    }).then((data) => data.json())
      .then(()=>history.push("/movies"));
  }

  

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
      <TextField id="trailer" label="Enter Trailer URL" variant="standard" onChange={(event) => {
        setTrailer(event.target.value);
      }} />

      <Button variant="outlined" onClick={addMovie}>Add Movie</Button>
    </div>
  );
}
