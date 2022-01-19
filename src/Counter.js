import { useState } from "react";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter-container">
      <IconButton  color="primary"
      aria-label="like-button"
      onClick={() => setLike(like + 1)}>
        <Badge badgeContent={(like)} color="primary">👍</Badge>
        </IconButton>
     
        <IconButton  color="error"
      aria-label="dislike-button"
      onClick={() => setDislike(dislike + 1)}>
        <Badge badgeContent={(dislike)} color="error">👎</Badge>
        </IconButton>
    </div>
  );
}
