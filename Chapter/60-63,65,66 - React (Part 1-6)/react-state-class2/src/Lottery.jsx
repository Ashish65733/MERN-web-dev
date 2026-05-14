import { useState } from "react";
import { getTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningCondition }) {
  let [ticket, setTicket] = useState(getTicket(n));
  let isWinning = winningCondition(ticket);

  let buyTicket = () => {
    setTicket(getTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy new Ticket</button>
      <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
