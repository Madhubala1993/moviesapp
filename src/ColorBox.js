
export function ColorBox({ color }) {
  const styles = {
    background: color,
    height: "25px",
    marginTop: "10px",
  };
  return (
    <div style={styles}></div>
  );
}
