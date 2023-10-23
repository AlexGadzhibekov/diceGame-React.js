import "./CurrentPointBox.css";
export default function CurrentPointBox({ randomPoint }) {
  return (
    <div className="currentPointBox">
      <div className="currentPointBox__title">current points</div>
      <div className="currentPointBox__count">{randomPoint}</div>
    </div>
  );
}
