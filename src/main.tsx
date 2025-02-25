import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { Home } from "./pages/Home/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pt" element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
