import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { AuthProvider } from "./AuthContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <AllRoutes />
    </AuthProvider>
  </BrowserRouter>
);
