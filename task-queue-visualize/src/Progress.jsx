import "./Progress.css";

const Progress = (props) => {
  const { width } = props;

  return (
    <div className="container">
      <div
        className="content"
        style={{ transform: `scaleX(${width / 100})` }}
      ></div>
    </div>
  );
};

export default Progress;
