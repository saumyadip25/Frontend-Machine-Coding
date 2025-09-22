const AutoChip = (props) => {
  const { item, removeSkills } = props;

  const handleDelete = (value) => {
    removeSkills(value);
  };

  return (
    <div
      style={{
        minWidth: "fit-content",
        height: "30px",
        backgroundColor: "white",
        position: "relative",
        margin: "10px",
        border: "solid 1px black",
        borderRadius: "15px",
      }}
    >
      <span style={{ display: "inline-block", padding: "10px" }}>{item}</span>
      <button
        style={{ position: "absolute", width: "fit-content", right: 0 }}
        onClick={() => handleDelete(item)}
      >
        x
      </button>
    </div>
  );
};

export default AutoChip;
