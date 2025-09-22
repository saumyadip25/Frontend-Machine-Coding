import "./Login.css";
import { useContext } from "react";
import { ContextApi } from "../Context";
import { useNavigate } from "react-router-dom";
import Tab from "./Tab";

function Login() {
  const { username, password, setUsername, setPassword } =
    useContext(ContextApi);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Login successful! Stored in localStorage ✅");
    navigate("/profile");
  };
  return (
    <div className="login-container">
      <Tab />
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            const { value } = e.target;
            setUsername(value);
          }}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            const { value } = e.target;
            setPassword(value);
          }}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
