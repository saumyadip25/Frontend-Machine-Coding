import { useState } from "react";

const Toggle = ({ render }) => {
  const [on, setOn] = useState(false);
  const handleOn = () => {
    setOn((prev) => !prev);
  };
  return <div>{render(on, handleOn)}</div>;
};

export default Toggle;
