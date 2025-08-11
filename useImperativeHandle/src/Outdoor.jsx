import { useState, forwardRef, useImperativeHandle } from "react";

const Outdoor = forwardRef((props, ref) => {
  const [outdoor, setOutdoor] = useState(["Cricket", "Football", "F1"]);

  const addOutdoor = (item) => {
    setOutdoor((prev) => [...prev, item]);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        addOutdoor: addOutdoor,
      };
    },
    []
  );

  return (
    <div>
      {outdoor.map((item) => {
        return (
          <li key={item} style={{ margin: "5px 0" }}>
            {item}
          </li>
        );
      })}
    </div>
  );
});

export default Outdoor;
