import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">FreeLancer</h2>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/jobs">Job List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
