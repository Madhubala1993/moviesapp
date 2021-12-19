import { useState } from "react/cjs/react.development";
// import { AddColor } from "./App";

export function ColorBox() {
  const [color, setColor] = useState("");
  const [colorList, setcolorList] = useState(["blue", "green", "violet"]);
  // const colorList = ["blue", "green", "violet"];
  const styles = { background: color };
  return (
    <div>
      <input
        value={color}
        style={styles}
        placeholder="Enter a color"
        onChange={(event) => setColor(event.target.value)}
      />
      <button onClick={() => setcolorList([...colorList, color])}>
        Add color
      </button>
      {colorList.map((clr) => (
        <AddColor clr={clr} />
      ))}
    </div>
  );
}

function AddColor({ clr }) {
  const styles = {
    height: "25px",
    width: "250px",
    background: clr,
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
