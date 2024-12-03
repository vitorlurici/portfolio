import "./App.scss";
import { LogoIcon } from "./assets/svg/LogoIcon";

function App() {
  return (
    <main className="main-container">
      <header className="header-container">
        <div className="logo">
          <LogoIcon />
          <div className="logo-text">
            <span className="name">Vitor Lurici</span>
            <span className="description">SOFTWARE ENGINEER</span>
          </div>
        </div>
        <div className="menu">
          <span>MENU</span>
        </div>
      </header>
    </main>
  );
}

export default App;
