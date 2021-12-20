import { useState } from "react/cjs/react.development";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const decrementLike = () => setDisLike(disLike + 1);
 
  return (
    <div className="counterItems">
      <IconButton aria-label="like movie" color="primary"
      onClick={incrementLike}
      >
      <Badge badgeContent={like} color="primary">
     👍 
      </Badge>
     </IconButton>
     
     
     <IconButton aria-label="dislike movie" color="error"
        onClick={decrementLike}
        >
        <Badge badgeContent={disLike} color="error">
        👎 
      </Badge>
        </IconButton>
      {/* <p>{like}</p> */}
    </div>
  );
  }
