import "./CurrentPointBox.css";
export default function CurrentPointBox({ randomPoint }) {
  return (
    <div className="RandomBox">
      <div className="RandomBox__title">current points</div>
      <div className="RandomBox__count">{randomPoint}</div>
    </div>
  );
}
