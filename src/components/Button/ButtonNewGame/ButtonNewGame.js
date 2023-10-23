import Button from "../Button";
import { defaultPlayerSettings } from "../../GameBox/GameBox";
export default function ButtonNewGame({ setPlayers, setIsDisabled }) {
  const newGame = () => {
    console.log(defaultPlayerSettings);
    setPlayers(JSON.parse(JSON.stringify(defaultPlayerSettings)));
    setIsDisabled(false);
  };
  return <Button onClick={newGame} value={"New Game"} />;
}
