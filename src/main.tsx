import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { Home } from "./pages/Home/Home.tsx";
import Project from "./pages/Project/Project.tsx";
import Error from "./pages/Error/Error.tsx";
import { MenuScreen } from "./components/MenuScreen/MenuScreen.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/pt" element={<Home />} />
          <Route path="/*" element={<Error />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/pt/projects/:id" element={<Project />} />
          <Route path="/menu" element={<MenuScreen />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
