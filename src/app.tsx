import React from "react";
import "./app.css";
import { NavBar } from "./components";
import { ROUTING_CONFIG } from "./conts";
import { AppRouter } from "./app.routes";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <header className="sticky top-0 z-40 flex flex-none w-full mx-auto bg-white lg:z-50 max-w-8xl">
        <NavBar links={ROUTING_CONFIG} />
      </header>
      <main>
        <div className="App-main">
          <AppRouter routes={ROUTING_CONFIG} />
        </div>
      </main>
      <footer>
        <p>Handcrafted by me carlostxm©</p>
      </footer>
    </div>
  );
};

export default App;
