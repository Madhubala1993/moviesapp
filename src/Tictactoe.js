import { useState } from "react";
import Button from '@mui/material/Button';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import CachedSharpIcon from '@mui/icons-material/CachedSharp';
import { GameBox } from "./GameBox";

export function Tictactoe() {
  const [board, setBoard] = useState([
    null, null, null,
    null, null, null,
    null, null, null,
  ]);
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (!winner & !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };

  const decideWinner = board => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // console.log(a, b, c);
      if (board[a] != null & board[a] == board[b] & board[a] == board[c]) {
        return board[a];
      }
    }
  };
  const winner = decideWinner(board);
  const { width, height, wind } = useWindowSize();
  const [play, setPlay] = useState(false);

  const gameBlock = () => {
    return (
      <div className="tic-tac-toe-container">
        {winner ? (<Confetti width={width} height={height} wind="0" />) : ""}
        {isXTurn ? <h3>X TURN</h3> : <h3>O TURN</h3>}
        <div className="board">
          {board.map((val, index) => <GameBox val={val} onPlayerClick={() => handleClick(index)} />)}
        </div>
        {winner ? <h2> The winner is {winner}</h2> : ""}
        <Button onClick={() => {
          setPlay(false);
          setBoard([null, null, null, null, null, null, null, null, null]);

        }}> <CachedSharpIcon /> </Button>
      </div>
    );
  };

  const xoSelection = () => {
    return (
      <div className="xo-buttons">
        <Button variant="outlined" onClick={() => {
          setIsXTurn(true);
          setPlay(true);
        }}>X</Button>
        <Button variant="outlined" onClick={() => {
          setIsXTurn(false);
          setPlay(true);
        }}> O</Button>
      </div>
    );
  };

  return (
    <div className="tic-tac-toe-container">
      {play ? gameBlock() : xoSelection()}
    </div>
  );
}
