import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./routes/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> },
]);
