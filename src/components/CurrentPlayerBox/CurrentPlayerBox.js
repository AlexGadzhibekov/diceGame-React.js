import CurrentPointBox from "./CurrentPointBox/CurrentPointBox";
import "./CurrentPlayerBox.css";
export default function DicePlayer({
  title,
  count,
  randomPoint,
  isActivePlayer,
  isWinner,
}) {
  return (
    <div
      className={`CurrentPlayer ${isActivePlayer ? "active" : "hide"} ${
        isWinner ? "winner" : ""
      }`}
    >
      <h2>{title}</h2>
      <span>{count}</span>
      <CurrentPointBox randomPoint={randomPoint} />
    </div>
  );
}
