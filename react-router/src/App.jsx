import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <nav>
          <Link to="/">App</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/home">Home</Link>
        </nav>
      </div>
      This is App Component
    </div>
  );
}

export default App;
