import { useContext } from "react";
import { ContextApi } from "../Context";
import "./Tab.css";

const TAB = [
  { id: 1, label: "Freelancer" },
  { id: 2, label: "Employer" },
];

const Tab = () => {
  const { tab, setTab } = useContext(ContextApi);
  return (
    <div className="tab-container">
      {TAB.map((item) => {
        return (
          <button
            className={`${tab === item.label ? "active" : ""}`}
            onClick={() => {
              setTab(item.label);
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
