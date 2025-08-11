import "./Dropdown.css";

const Dropdown = (props) => {
  const { dropdownList, loading, searchTerm } = props;

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? <strong key={index}>{part}</strong> : part
    );
  };

  if (loading) {
    return (
      <div className="dropdown">
        <div className="option">Loading...</div>
      </div>
    );
  }

  return (
    <div className="dropdown">
      {dropdownList.map((option) => (
        <div
          key={option.id}
          className="option"
          onClick={() => console.log(option)}
        >
          {highlightText(option.name, searchTerm)}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
