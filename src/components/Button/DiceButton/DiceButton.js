import { useState } from "react";
import { GiInvertedDice1 } from "@react-icons/all-files/gi/GiInvertedDice1";
import { GiInvertedDice2 } from "@react-icons/all-files/gi/GiInvertedDice2";
import { GiInvertedDice3 } from "@react-icons/all-files/gi/GiInvertedDice3";
import { GiInvertedDice4 } from "@react-icons/all-files/gi/GiInvertedDice4";
import { GiInvertedDice5 } from "@react-icons/all-files/gi/GiInvertedDice5";
import { GiInvertedDice6 } from "@react-icons/all-files/gi/GiInvertedDice6";
import ButtonNewGame from "../ButtonNewGame/ButtonNewGame";
import ButtonRoll from "../ButtonRoll/ButtonRoll";
import ButtonLeave from "../ButtonLeave/ButtonLeave";
import "./DiceButton.css";

export default function DiceButtons({
  players,
  setPlayers,
  defaultPlayerSettings,
}) {
  const [randomPoint, setRandomPoint] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const arrIcons = [
    <GiInvertedDice1 />,
    <GiInvertedDice2 />,
    <GiInvertedDice3 />,
    <GiInvertedDice4 />,
    <GiInvertedDice5 />,
    <GiInvertedDice6 />,
  ];
  return (
    <div className="DiceButtons">
      <ButtonNewGame
        setPlayers={setPlayers}
        setIsDisabled={setIsDisabled}
        defaultPlayerSettings={defaultPlayerSettings}
      />
      <div className="svgDice">{arrIcons[randomPoint - 1]}</div>
      <ButtonRoll
        setPlayers={setPlayers}
        players={players}
        setRandomPoint={setRandomPoint}
        isDisabled={isDisabled}
      />
      <ButtonLeave
        setPlayers={setPlayers}
        players={players}
        setIsDisabled={setIsDisabled}
      />
    </div>
  );
}
