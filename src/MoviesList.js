import { useEffect , useState } from "react";
import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";

export function MoviesList() {

  const [movies, setMovieList] = useState([]);
  const history=useHistory();

  const getMovies=()=>{
    fetch("https://61e688bcce3a2d0017359229.mockapi.io/movies", {method: "GET"},)
    .then((data)=> data.json())
    .then(mvs=>setMovieList(mvs));
  }
  useEffect(getMovies,[]);

  const deleteMovie = (id) =>{  
    fetch(`https://61e688bcce3a2d0017359229.mockapi.io/movies/${id}`, {method: "DELETE"})
    .then((data)=> data.json())
    .then(()=>getMovies())
    };
    

  return (
    <div className="movies-list">
      {movies.map(({ name, poster, rating, summary, id } ,index) => (
        <Movie 
            key={id}
            deleteButton={
                <IconButton aria-label="delete" color="error" onClick={()=> deleteMovie(id)}>
                    <DeleteIcon />
                </IconButton>
            }
            editButton={
              <IconButton color="secondary" aria-label="edit-movie"  onClick={()=> history.push(`/movie/edit/${id}`)}>
                  <EditIcon/>
               </IconButton>
          }
            name={name} 
            poster={poster} 
            rating={rating} 
            summary={summary} 
            id = {id} />
      ))}
    </div>
  );
}
