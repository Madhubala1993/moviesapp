import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export function MoviesList({ movies , setMovieList}) {
  const deleteMovie = (index) =>{
    const deleteIndex = index;
    const remainingMovies = movies.filter((mv,idx)=> deleteIndex !== idx);
    setMovieList(remainingMovies)
    console.log(movies, remainingMovies)
};
  return (
    <div className="movies-list">
      {movies.map(({ name, poster, rating, summary } ,index) => (
        <Movie 
            key={index}
            deleteButton={
                <IconButton aria-label="delete" color="error" onClick={()=> deleteMovie(index)}>
                    <DeleteIcon />
                </IconButton>
            }
            name={name} 
            poster={poster} 
            rating={rating} 
            summary={summary} 
            id = {index} />
      ))}
    </div>
  );
}
