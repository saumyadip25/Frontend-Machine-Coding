import { useState } from "react";
import checkboxData from "./checkboxData";
import CheckBox from "./CheckBox";
// import { toggleCheckBox, dfs } from "./utils";

function App() {
  const [check, setCheck] = useState({});

  // const handleToggleChange = (id, newValue) => {};

  return (
    <div>
      {checkboxData.map((data) => {
        return (
          <CheckBox
            data={data}
            key={data.id}
            check={check}
            // handleToggleChange={handleToggleChange}
            setCheck={setCheck}
            root={checkboxData}
          />
        );
      })}
    </div>
  );
}

export default App;

// when parent clicked, all child should have changed
