import React from "react";
import "./app.css";
import { NavBar } from "./components";
import { ROUTING_CONFIG, THEME_ROOT_TESTID } from "./conts";
import { AppRouter } from "./app.routes";
import { ThemeContext } from "./context";
import { Theme } from "./model";
import classNames from "classnames";

const App: React.FC<{}> = () => {
  const [theme, setTheme] = React.useState<Theme>(Theme.dark);
  const handleChangeTheme = (theme: Theme) => {
    setTheme(theme);
  };
  const rootClassNames = classNames({
    //"text-center": true,
    dark: theme === Theme.dark,
    light: theme === Theme.light,
  });
  return (
    <ThemeContext.Provider value={theme}>
      <div className={rootClassNames} data-testid={THEME_ROOT_TESTID}>
        <div className="text-center transition duration-500 bg-white dark:bg-gray-900">
          <header className="sticky top-0 z-40 flex flex-none w-full h-16 mx-auto lg:z-50 max-w-8xl">
            <NavBar links={ROUTING_CONFIG} onChangeTheme={handleChangeTheme} />
          </header>
          <main>
            <div className="flex flex-col items-center justify-center">
              <AppRouter routes={ROUTING_CONFIG} />
            </div>
          </main>
          <footer className="flex flex-col justify-center w-full pt-16 pb-16 align-center">
            <div className="relative mx-10vw">
              <p className="p-text">Handcrafted with ♥ by carlostxm</p>
            </div>
          </footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
