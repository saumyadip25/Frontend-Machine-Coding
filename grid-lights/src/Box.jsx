const Box = (props) => {
  const { show, state, id, handleBoxClick, progress } = props;
  return (
    <button
      style={{
        border: "solid 1px black",
        height: "100px",
        width: "100px",
        margin: "5px",
        visibility: !show ? "hidden" : "",
        backgroundColor: state.includes(id) ? "green" : "",
      }}
      onClick={() => handleBoxClick(id)}
      disabled={progress || state.includes(id)}
    ></button>
  );
};

export default Box;
