import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);
