import Button from "../Button";
export default function ButtonNewGame({
  setPlayers,
  setIsDisabled,
  defaultPlayerSettings,
}) {
  const newGame = () => {
    console.log(defaultPlayerSettings);
    setPlayers(defaultPlayerSettings);
    setIsDisabled(false);
  };
  return (
    <div className="ButtonBox">
      <Button onClick={newGame} value={"New Game"} />
    </div>
  );
}
