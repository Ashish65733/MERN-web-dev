import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0,
  });

  let UpdateBlue = () => {
    // console.log("Blue moves before update = ", moves.blue);
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  };

  let UpdateYellow = () => {
    // console.log("Yellow moves before update = ", moves.yellow);
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };

  let UpdateGreen = () => {
    // console.log("Green moves before update = ", moves.green);
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };

  let UpdateRed = () => {
    // console.log("Red moves before update = ", moves.red);
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };

  return (
    <div>
      <h3>Game Begins!</h3>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={UpdateBlue}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow", color : "black" }} onClick={UpdateYellow}>
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={UpdateGreen}>
          +1
        </button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={UpdateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
