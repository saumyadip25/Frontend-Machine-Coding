import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx"; // layout with Navbar + Footer
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import JobList from "./components/JobList.jsx";
import Auth from "./components/Auth.jsx";

const router = createBrowserRouter([
  {
    path: "/login", // Public route
    element: <Login />,
  },
  {
    path: "/", // Protected layout
    element: (
      <Auth>
        <App />
      </Auth>
    ),
    children: [
      { path: "profile", element: <Profile /> },
      { path: "jobs", element: <JobList /> },
    ],
  },
]);

export default router;
