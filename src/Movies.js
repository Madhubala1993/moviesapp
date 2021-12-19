import { useState } from "react/cjs/react.development";
import { Counter } from "./Counter";
import Button from '@mui/material/Button';

export function Movies({ deleteButton, name, poster, rating, summary }, index) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="container">
      <img className="poster" src={poster} alt={name}></img>
      <div className="movie-spec">
        <p>{name}</p>
        <p> ⭐️ {rating}</p>
      </div>
      <Button variant="outlined" onClick={() => {
          setToggle(!toggle);
        }}
        >Toggle description</Button>
      {toggle ? <p className="movie-summary">  {summary}</p> : <p></p>}
      <div className="movie-actions">
      <Counter />
      {deleteButton} 
      </div>
    </div>
  );
}
