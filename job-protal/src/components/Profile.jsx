import { useState, useRef, useEffect } from "react";

// Mock data - replace with your actual constant
const availableSkills = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "TypeScript",
  "Java",
  "C++",
  "HTML/CSS",
  "Vue.js",
  "Angular",
  "PHP",
  "Ruby",
];

const Chip = ({ content, skills, addToSkills }) => {
  const isSelected = skills.includes(content);

  const chipStyle = {
    height: "32px",
    minWidth: "60px",
    borderRadius: "16px",
    width: "fit-content",
    cursor: "pointer",
    padding: "6px 12px",
    margin: "4px",
    border: isSelected ? "2px solid #2563eb" : "1px solid #d1d5db",
    backgroundColor: isSelected ? "#dbeafe" : "white",
    color: isSelected ? "#1e40af" : "#374151",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.2s ease",
  };

  return (
    <button
      style={chipStyle}
      onClick={() => addToSkills(content)}
      onMouseOver={(e) => {
        if (!isSelected) {
          e.target.style.backgroundColor = "#f3f4f6";
        }
      }}
      onMouseOut={(e) => {
        if (!isSelected) {
          e.target.style.backgroundColor = "white";
        }
      }}
    >
      {content}
    </button>
  );
};

const AutoChip = ({ item, removeSkills }) => {
  const chipStyle = {
    display: "inline-flex",
    alignItems: "center",
    minWidth: "fit-content",
    height: "32px",
    backgroundColor: "#dbeafe",
    position: "relative",
    margin: "4px",
    border: "1px solid #2563eb",
    borderRadius: "16px",
    color: "#1e40af",
    fontSize: "14px",
    fontWeight: "500",
    padding: "6px 12px",
  };

  const deleteButtonStyle = {
    marginLeft: "8px",
    background: "none",
    border: "none",
    color: "#1e40af",
    cursor: "pointer",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div style={chipStyle}>
      <span>{item}</span>
      <button
        style={deleteButtonStyle}
        onClick={() => removeSkills(item)}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#bfdbfe")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        x
      </button>
    </div>
  );
};

function Profile() {
  const [totalSkills, setTotalSkills] = useState(availableSkills);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  // Fix for focus issue - use useEffect
  useEffect(() => {
    if (showNew && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showNew]);

  const addToSkills = (skillToAdd) => {
    setSkills((prevSkills) => {
      if (prevSkills.includes(skillToAdd)) {
        return prevSkills.filter((skill) => skill !== skillToAdd);
      } else {
        return [...prevSkills, skillToAdd];
      }
    });
  };

  const removeSkills = (skillToRemove) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const handleAddNewSkill = () => {
    const trimmedSkill = newSkill.trim();

    // Validation
    if (!trimmedSkill) {
      setError("Skill name cannot be empty");
      return;
    }

    if (
      totalSkills.some(
        (skill) => skill.toLowerCase() === trimmedSkill.toLowerCase()
      )
    ) {
      setError("This skill already exists");
      return;
    }

    // Add to total skills and clear form
    setTotalSkills((prev) => [...prev, trimmedSkill]);
    setSkills((prev) => [...prev, trimmedSkill]); // Auto-select the new skill
    setNewSkill("");
    setShowNew(false);
    setError("");
  };

  const handleCancel = () => {
    setNewSkill("");
    setShowNew(false);
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddNewSkill();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const sectionStyle = {
    marginBottom: "30px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#111827",
  };

  const skillsGridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
    marginBottom: "20px",
  };

  const addSkillContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
  };

  const inputStyle = {
    padding: "8px 12px",
    border: error ? "2px solid #ef4444" : "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    width: "200px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#2563eb",
    color: "white",
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#6b7280",
    color: "white",
  };

  const addButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#059669",
    color: "white",
  };

  const errorStyle = {
    color: "#ef4444",
    fontSize: "12px",
    marginTop: "4px",
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Skills and Expertise</h2>
        <div style={skillsGridStyle}>
          {totalSkills.map((skill) => (
            <Chip
              key={skill}
              content={skill}
              addToSkills={addToSkills}
              skills={skills}
            />
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        {!showNew ? (
          <button
            style={primaryButtonStyle}
            onClick={() => setShowNew(true)}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
          >
            + Add New Skill
          </button>
        ) : (
          <div>
            <div style={addSkillContainerStyle}>
              <input
                ref={inputRef}
                value={newSkill}
                onChange={(e) => {
                  setNewSkill(e.target.value);
                  setError(""); // Clear error when typing
                }}
                onKeyDown={handleKeyPress}
                style={inputStyle}
                placeholder="Enter skill name"
              />
              <button
                style={addButtonStyle}
                onClick={handleAddNewSkill}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#047857")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#059669")}
              >
                Add
              </button>
              <button
                style={secondaryButtonStyle}
                onClick={handleCancel}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#525252")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#6b7280")}
              >
                Cancel
              </button>
            </div>
            {error && <div style={errorStyle}>{error}</div>}
          </div>
        )}
      </div>

      {skills.length > 0 && (
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Selected Skills ({skills.length})</h3>
          <div style={skillsGridStyle}>
            {skills.map((skill) => (
              <AutoChip key={skill} item={skill} removeSkills={removeSkills} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
