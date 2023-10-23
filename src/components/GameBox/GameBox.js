import { useState } from "react";
import CurrentPlayerBox from "../CurrentPlayerBox/CurrentPlayerBox";
import DiceButton from "../Button/DiceButton/DiceButton";
import "./GameBox.css";
export default function Gamebox() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Player 1",
      turn: true,
      count: 0,
      randomPoint: 0,
      winner: false,
    },
    {
      id: 2,
      name: "Player 2",
      turn: false,
      count: 0,
      randomPoint: 0,
      winner: false,
    },
  ]);

  let defaultPlayerSettings = Object.assign([], players);

  return (
    <div className="GameBox">
      {players.map((player) => {
        return (
          <CurrentPlayerBox
            key={player.name}
            title={player.name}
            count={player.count}
            randomPoint={player.randomPoint}
            isActivePlayer={player.turn}
            isWinner={player.winner}
          />
        );
      })}
      <DiceButton
        players={players}
        setPlayers={setPlayers}
        defaultPlayerSettings={defaultPlayerSettings}
      />
    </div>
  );
}
