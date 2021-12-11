import React from "react";
import { NavBarProps } from "./navBar.model";
import { NavigationBar } from "./navigationBar";
import { NavigationMenu } from "./navigationMenu";
import { ThemeButton } from "./themeButton";

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { onChangeTheme } = props;
  return (
    <nav className="w-full">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <NavigationMenu />
          <NavigationBar {...props} />
          <ThemeButton onThemeChange={onChangeTheme} />
        </div>
      </div>
    </nav>
  );
};
