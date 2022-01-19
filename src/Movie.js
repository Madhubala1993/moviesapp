import { useState } from "react";
import { Counter } from "./Counter";
import Card from '@mui/material/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";


export function Movie({deleteButton, editButton, name, poster, rating, summary, id }) {
  const [show, setShow] = useState(false);
  const styles = rating > 8 ? { color: "Green" } : { color: "crimson" };
  const history = useHistory();

  return (
    <Card variant="outlined" className="movie-container">
<img src={poster} alt={name} className="movie_poster" />
    <CardContent>
      
      <div className="movie-specs">
        <h3 className="movie_name">{name}</h3>

        <IconButton aria-label="movie-info" color="primary" onClick={()=> history.push(`/movie/${id}`)}>
        <InfoIcon/>
        </IconButton>
        
        <Button variant="text" onClick={() => setShow(!show)}>{show ? (<ExpandLessIcon />) : <ExpandMoreIcon />}</Button>
        <p style={styles} className="movie_rating"> ⭐ {rating}</p>
      </div>
      
      {show ? <p className="movie_summary">{summary}</p> : <p></p>}
      </CardContent>

      <CardActions>
      <Counter />
      {deleteButton}
      {editButton}

      
      </CardActions>

    </Card>
  );
}
