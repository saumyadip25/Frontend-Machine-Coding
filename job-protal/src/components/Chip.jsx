import { useState } from "react";
import "./Chip.css";

const Chip = (props) => {
  const { content, skills, addToSkills } = props;

  const handleClick = (e, item) => {
    addToSkills(item);
  };

  return (
    <button
      className={`container ${skills.includes(content) ? "active" : ""}`}
      onClick={(e) => handleClick(e, content)}
    >
      {content}
    </button>
  );
};

export default Chip;
