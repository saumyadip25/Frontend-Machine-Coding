import { useEffect, useState } from "react";
import Box from "./Box";
const MATRIX = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const countOnes = MATRIX.reduce((acc, row) => {
  return acc + row.reduce((rowAcc, val) => rowAcc + (val === 1 ? 1 : 0), 0);
}, 0);

const App = () => {
  const [state, setState] = useState([]);
  const [progress, setProgress] = useState(false);

  const handleClickFilled = () => {
    setProgress(true);
    const timerId = setInterval(() => {
      setState((prev) => {
        if (prev.length === 0) {
          clearInterval(timerId);
          setProgress(false);
          return prev;
        }
        const newArray = [...prev];
        newArray.splice(newArray.length - 1, 1);
        return newArray;
      });
    }, 300);
  };

  const handleBoxClick = (id) => {
    setState((prev) => [...prev, id]);
  };

  useEffect(() => {
    if (countOnes === state.length) {
      handleClickFilled();
    }
  }, [state.length]);

  return (
    <div>
      {MATRIX.map((row, rowIndex) => {
        return (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((col, colIndex) => {
              return (
                <div key={`${rowIndex}-${colIndex}`}>
                  <Box
                    show={col}
                    state={state}
                    id={row.length * rowIndex + colIndex}
                    handleBoxClick={handleBoxClick}
                    progress={progress}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default App;
