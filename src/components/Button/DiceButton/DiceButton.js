import { useState } from "react";
import ButtonNewGame from "../ButtonNewGame/ButtonNewGame";
import ButtonRoll from "../ButtonRoll/ButtonRoll";
import ButtonLeave from "../ButtonLeave/ButtonLeave";
import "./DiceButton.css";

import { arrIcons } from "../../../constans/Dice";

export default function DiceButtons({ players, setPlayers }) {
  const [randomPoint, setRandomPoint] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="DiceButtons">
      <ButtonNewGame setPlayers={setPlayers} setIsDisabled={setIsDisabled} />
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
        isDisabled={isDisabled}
      />
    </div>
  );
}
