import Button from "../Button";
export default function ButtonRoll({
  setRandomPoint,
  setPlayers,
  players,
  isDisabled,
}) {
  const randomGenerateNumber = () => {
    const newPlayers = [...players];
    const random = Math.trunc(1 + Math.random() * (6 + 1 - 1));
    newPlayers.forEach((player) => {
      if (player.turn) {
        player.randomPoint += random;
      }
      if (random === 1) {
        player.randomPoint = 0;
        player.turn = !player.turn;
      }
    });
    setRandomPoint(random);
    setPlayers(newPlayers);
  };
  return (
    <div className="ButtonBox">
      <Button
        onClick={randomGenerateNumber}
        isDisabled={isDisabled}
        value={"Roll the Dice"}
      />
    </div>
  );
}
