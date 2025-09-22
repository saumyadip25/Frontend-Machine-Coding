import { useState, createContext } from "react";

export const ContextApi = createContext();

const Context = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState("Freelancer");

  return (
    <ContextApi.Provider
      value={{ username, setUsername, password, setPassword, tab, setTab }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};

export default Context;
