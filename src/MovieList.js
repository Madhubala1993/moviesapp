import { Movies } from "./Movies";

export function MovieList({ movies , setMovieList }) {
  return (
    <div className="movieList">
      {movies.map(({ name, poster, rating, summary }, index) => (
        <Movies
          deleteButton={
          <button
            onClick={() => {
              const deleteIndex = index;
              const remainingMovies = movies.filter((mv, idx) => deleteIndex !== idx);
              console.log(movies, remainingMovies);
              setMovieList(remainingMovies);
            }}>
            Delete
          </button>}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          index={index} />
      ))}
    </div>
  );
}
