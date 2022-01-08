import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("");
  const styles = { background: color };
  const [colorList, setColorList] = useState(["teal", "crimson", "orange"]);
  return (
    <div className="colorbox-container">
      <div>
        <input value={color} style={styles} placeholder="Enter a color" onChange={(event) => {
          setColor(event.target.value);
        }} />
        <button onClick={() => {
          setColorList([...colorList, color]);
        }}>Add Color</button>
      </div>
      {colorList.map((color) => <ColorBox color={color} />)}

    </div>
  );
}
