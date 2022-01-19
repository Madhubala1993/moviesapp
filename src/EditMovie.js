import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function EditMovie() {

  const [movie, setMovieList] = useState(null);
  const getMovie = () => {
    fetch(`https://61e688bcce3a2d0017359229.mockapi.io/movies/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then(mvs => setMovieList(mvs));
  };
  useEffect(getMovie, []);

  const { id } = useParams();
  const history = useHistory();
  
  return movie ? <UpdateMovie movie={movie}/> : <h1>Loading...</h1> ;
}

export function UpdateMovie({movie}) {

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const addMovie= () => {
    const updatedMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    // setMovieList([...movieList, newMovie]);
    // history.push("/movies");

    fetch(`https://61e688bcce3a2d0017359229.mockapi.io/movies/${movie.id}`, {
     method: "PUT" ,
     body : JSON.stringify(updatedMovie),
     headers:{"Content-Type": "application/json"}
    }).then((data) => data.json())
      .then(()=>history.push("/movies"));
  }

  const history = useHistory();

  return (
    <div className="addmovie-container">
      <TextField value={name} label="Enter movie name" variant="standard" onChange={(event) => {
        setName(event.target.value);
      }} />
      <TextField value={poster} label="Enter Poster URL" variant="standard" onChange={(event) => {
        setPoster(event.target.value);
      }} />
      <TextField value={rating} label="Enter movie rating" variant="standard" onChange={(event) => {
        setRating(event.target.value);
      }} />
      <TextField value={summary} label="Enter movie summary" variant="standard" onChange={(event) => {
        setSummary(event.target.value);
      }} />
      <TextField value={trailer} label="Enter Trailer URL" variant="standard" onChange={(event) => {
        setTrailer(event.target.value);
      }} />

      <Button variant="outlined" onClick={addMovie} color="success" >Save Changes</Button>
    </div>
  );
}
