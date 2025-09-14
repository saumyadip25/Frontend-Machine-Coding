import { useState } from "react";

const Toggle = ({ render }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return render(toggle, handleToggle);
};

export default Toggle;
