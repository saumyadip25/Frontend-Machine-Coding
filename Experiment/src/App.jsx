import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [debounced, setDebounced] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputVal(e.target.value);

    setTimeout(() => {
      setDebounced(e.target.value);
      console.log("e.target.value ", e.target.value);
      console.log("value ", value);
    }, 2000);
  };

  return (
    <div>
      <input value={inputVal} onChange={handleChange} />
      <input value={debounced} readOnly />
    </div>
  );
}

export default App;
