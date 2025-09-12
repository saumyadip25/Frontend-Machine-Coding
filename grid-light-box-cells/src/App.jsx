import Box from "./Box";
import "./Box.css";
import { useState } from "react";

const ROWS = 3;
const COLS = 3;

export default function App() {
  const [grid, setGrid] = useState(() => {
    const initialGrid = {};
    for (let i = 0; i < ROWS * COLS; i++) {
      initialGrid[i] = false;
    }
    return initialGrid;
  });

  const handleToggle = (row, col) => {
    setGrid((prevGrid) => {
      const newGrid = { ...prevGrid };

      const directions = [
        [-1, 0], // up
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
      ];

      const currentIndex = row * COLS + col;
      newGrid[currentIndex] = !newGrid[currentIndex];

      directions.forEach(([dRow, dCol]) => {
        const newRow = row + dRow;
        const newCol = col + dCol;

        if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
          const adjacentIndex = newRow * COLS + newCol;
          newGrid[adjacentIndex] = !newGrid[adjacentIndex];
        }
      });

      return newGrid;
    });
  };

  return (
    <div className="grid-container">
      {Array.from({ length: ROWS }, (_, rowIndex) => (
        <div className="grid-row" key={rowIndex}>
          {Array.from({ length: COLS }, (_, colIndex) => (
            <Box
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              isActive={grid[rowIndex * COLS + colIndex]}
              onToggle={handleToggle}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
