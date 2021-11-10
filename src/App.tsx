import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components";
import { NAVBAR_LINKS } from "./conts";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <header className="sticky top-0 z-40 flex flex-none w-full mx-auto bg-white lg:z-50 max-w-8xl">
        <NavBar links={NAVBAR_LINKS} />
      </header>
      <main>
        <div className="App-main">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </main>
      <footer>
        <p>©Copyright 2021 by Carlos Torres. All rights reversed.</p>
      </footer>
    </div>
  );
};

export default App;
