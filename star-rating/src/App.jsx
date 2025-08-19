import { useState } from "react";
import StarRating from "./StarRating";

function App() {
  const [rating, setRating] = useState(2);

  return (
    <div>
      <StarRating size={5} value={rating} onChange={setRating} />
    </div>
  );
}

export default App;
