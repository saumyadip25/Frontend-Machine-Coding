import "./Box.css";

const Box = ({ row, col, isActive, onToggle }) => {
  return (
    <button
      className={`box ${isActive ? "active" : ""}`}
      onClick={() => onToggle(row, col)}
      aria-label={`Cell ${row}-${col}, currently ${isActive ? "on" : "off"}`}
    >
      {row},{col}
    </button>
  );
};

export default Box;
