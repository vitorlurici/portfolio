import "./App.scss";
import { LogoIcon } from "./assets/svg/LogoIcon";
import { MenuIcon } from "./assets/svg/MenuIcon";

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
          <MenuIcon />
        </div>
      </header>
      <div className="content">
        <div className="introduction">
          <div className="content-left">
            <span>VITOR LURICI</span>
            <h1>Front-end and Back-end Engineer</h1>
            <h4>
              During my three years as a software engineering student, I honed
              strong critical and analytical skills, consistently delivering
              high-quality results in deadline-driven projects.
            </h4>
            <button>View Projects</button>
          </div>
          <div className="content-right"></div>
        </div>
      </div>
    </main>
  );
}

export default App;
