import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import AppPT from "./AppPT.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/portfolio" element={<App />} />
        <Route path="/portfolio/pt" element={<AppPT />} />
      </Routes>
    </Router>
  </StrictMode>
);
