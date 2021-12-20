import { Movies } from "./Movies";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export function MovieList({ movies , setMovieList }) {
  return (
    <div className="movieList">
      {movies.map(({ name, poster, rating, summary }, index) => (
        <Movies
        key ={index}
          deleteButton={
          <IconButton aria-label="delete" color="error"
          onClick={() => {
            const deleteIndex = index;
            const remainingMovies = movies.filter((mv, idx) => deleteIndex !== idx);
            setMovieList(remainingMovies);
          }}>
          <DeleteIcon />
        </IconButton>
          }
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          index={index} />
      ))}
    </div>
  );
}
