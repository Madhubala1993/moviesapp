import { useState } from "react/cjs/react.development";
import { Counter } from "./Counter";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function Movies({ deleteButton, name, poster, rating, summary }, index) {
  const styles = rating >= 8.5 ? { color: "green" } : { color: "Red" };
  const [toggle, setToggle] = useState(false);
  return (
    <Card  className="container">
      <img className="poster" src={poster} alt={name}></img>
      <CardContent>
      <div className="movie-spec">
        <p>{name}<IconButton 
          onClick={() => {
            setToggle(!toggle);
          }}
          color="primary" 
          aria-label="add to shopping cart">
            {toggle ? <ExpandLessIcon/> : <ExpandMoreIcon/> }
      </IconButton></p>
        <p style={styles}> ⭐️ {rating}</p>
      </div>
          
      {toggle ? <p className="movie-summary">  {summary}</p> : <p></p>}
      <CardActions>
      <Counter />
      {deleteButton} 
      </CardActions>
      </CardContent>
    </Card>
  );
}
