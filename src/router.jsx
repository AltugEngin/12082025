import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./routes/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import TeamPage from "./pages/TeamPage";
import SignUpPage from "./pages/SignUpPage";
import CreatePostPage from "./pages/CreatePostPage";

export const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/signup", element: <SignUpPage></SignUpPage> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
  {
    path: "/team",
    element: (
      <PrivateRoute>
        <TeamPage></TeamPage>
      </PrivateRoute>
    ),
  },
  {
    path: "/createPost",
    element: (
      <PrivateRoute>
        <CreatePostPage></CreatePostPage>
      </PrivateRoute>
    ),
  },
]);
