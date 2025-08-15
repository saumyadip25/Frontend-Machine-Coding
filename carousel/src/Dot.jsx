import "./Dot.css";

const Dot = (props) => {
  const { totalLength, currentIndex, goToSlide } = props;
  const elements = [];
  for (let index = 0; index < totalLength; index++) {
    elements.push(
      <div
        key={index}
        className={`dot ${index === currentIndex ? "dot--active" : ""}`}
        onClick={() => goToSlide(index)}
      ></div>
    );
  }
  return <div className="dots-container">{elements}</div>;
};

export default Dot;
