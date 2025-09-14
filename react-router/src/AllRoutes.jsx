import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import withAuth from "./withAuth";

const AllRoutes = () => {
  const ProtectedApp = withAuth(App);
  const ProtectedAbout = withAuth(About);
  const ProtectedHome = withAuth(Home);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedApp />} />
      <Route path="/about" element={<ProtectedAbout />} />
      <Route path="/home" element={<ProtectedHome name="Somu" />} />
    </Routes>
  );
};

export default AllRoutes;
