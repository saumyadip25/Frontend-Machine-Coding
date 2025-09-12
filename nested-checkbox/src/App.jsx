import { useState } from "react";
import checkboxData from "./checkboxData";
import CheckBox from "./CheckBox";

function App() {
  const [check, setCheck] = useState({});

  return (
    <div>
      {checkboxData.map((data) => {
        return (
          <CheckBox
            data={data}
            key={data.id}
            check={check}
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
