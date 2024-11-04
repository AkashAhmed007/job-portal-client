import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import FirebaseProvider from "./Firebase/FirebaseAuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider><RouterProvider router={router} /></FirebaseProvider>
  </StrictMode>
);
