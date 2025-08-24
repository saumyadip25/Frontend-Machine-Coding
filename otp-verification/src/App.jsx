import { useState, useRef } from "react";
import Otp from "./components/Otp";

const App = () => {
  return (
    <div>
      <Otp size={6} />
    </div>
  );
};

export default App;
