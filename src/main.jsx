import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthContextProvider>
);
