import { useState } from "react/cjs/react.development";

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="counterItems">
      <button
        className="button"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍 {like}
      </button>
      <button
        className="button"
        onClick={() => {
          setDisLike(disLike + 1);
        }}
      >
        👎 {disLike}
      </button>
      {/* <p>{like}</p> */}
    </div>
  );
}
