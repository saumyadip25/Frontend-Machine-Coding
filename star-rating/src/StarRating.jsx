import { useState } from "react";
import "./StarRating.css";

const StarRating = ({ size, value, onChange }) => {
  const [hoveredValue, setHoveredValue] = useState(0);

  const stars = new Array(size).fill(0);

  const getStarClass = (index) => {
    // If user is hovering, highlight stars up to hovered value
    if (hoveredValue > 0) {
      if (index < hoveredValue) {
        return "star active"; // Active star while hovering
      } else {
        return "star"; // Inactive star while hovering
      }
    }
    // If not hovering, highlight stars up to the selected value
    else {
      if (index < value) {
        return "star active"; // Active star based on current rating
      } else {
        return "star"; // Inactive star based on current rating
      }
    }
  };

  return (
    <div>
      {stars.map((_, index) => (
        <span
          key={index}
          className={getStarClass(index)}
          onMouseEnter={() => setHoveredValue(index + 1)}
          onMouseLeave={() => setHoveredValue(0)}
          onClick={() => onChange(index + 1)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
