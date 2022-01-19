export function GameBox({ val, onPlayerClick }) {
  const styles = val == "X" ? { color: "Green" } : { color: "crimson" };
  return (
    <div
      style={styles}
      onClick={() => onPlayerClick()}
      className="game-box">{val}</div>
  );
}
