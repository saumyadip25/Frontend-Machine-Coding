import { useRef } from "react";
import Indoor from "./Indoor";
import Outdoor from "./Outdoor";

function App() {
  let outdoorRef = useRef(null);

  const moveIndoorToOutdoor = (item) => {
    outdoorRef.current?.addOutdoor(item);
  };

  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-around" }}
    >
      <div>
        <Indoor moveIndoorToOutdoor={moveIndoorToOutdoor} />
      </div>
      <div>
        <Outdoor ref={outdoorRef} />
      </div>
    </div>
  );
}

export default App;
