import { useState } from "react";

const Indoor = (props) => {
  const { moveIndoorToOutdoor } = props;
  const [indoor, setIndoor] = useState(["Chess", "Ludo", "Catan"]);

  const removeIndoor = (item) => {
    const filteredList = indoor.filter((val) => val !== item);
    setIndoor([...filteredList]);
  };

  return (
    <div>
      {indoor.map((item) => {
        return (
          <li
            key={item}
            onClick={() => {
              removeIndoor(item);
              moveIndoorToOutdoor(item);
            }}
            style={{ cursor: "pointer", margin: "5px 0" }}
          >
            {item}
          </li>
        );
      })}
    </div>
  );
};

export default Indoor;
