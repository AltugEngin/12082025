import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";

const client=new QueryClient()

createRoot(document.getElementById("root")).render(
<QueryClientProvider client={client}>

  <AuthContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthContextProvider>
</QueryClientProvider>
);
