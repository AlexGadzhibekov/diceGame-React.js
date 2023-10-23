import Button from "../Button";
export default function ButtonLeave({
  setPlayers,
  players,
  setIsDisabled,
  isDisabled,
}) {
  const passTheTurn = () => {
    const newPlayers = [...players];
    newPlayers.forEach((player) => {
      if (player.turn) {
        player.count += player.randomPoint;
        if (player.count >= 100) {
          player.winner = true;
          setIsDisabled(true);
          alert(`${player.name} win!`);
          return;
        }
      }
      player.randomPoint = 0;
      player.turn = !player.turn;
    });
    setPlayers(newPlayers);
  };
  return <Button onClick={passTheTurn} value="Leave" isDisabled={isDisabled} />;
}
