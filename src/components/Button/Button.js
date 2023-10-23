import "./Button.css";
export default function Button({ value, onClick, isDisabled }) {
  return (
    <button className="btn" onClick={onClick} disabled={isDisabled}>
      {value}
    </button>
  );
}
