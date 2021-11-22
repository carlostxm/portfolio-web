import React from "react";
import { Link } from "react-router-dom";
import { NavBarLink, NavBarProps } from "./navBar.model";
import { ThemeButton } from "./themeButton";

const renderLinks = (links: NavBarLink[]): React.ReactNode => {
  const content: React.ReactNode = null;
  if (links.length > 0) {
    return (
      <div className="sm:block sm:ml-6">
        <div className="flex space-x-4">
          {links.map((link, index) => (
            <Link
              key={`${link.label}-${index}`}
              to={link.reference}
              className="px-3 py-2 rounded-md link-level2-text"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return content;
};

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { links, onChangeTheme } = props;
  // All links except Home as is rendered outside this NavBar
  const navBarLinks = links.filter((link) => !link.isHome);
  return (
    <nav className="w-full">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="px-3 py-2 rounded-md link-level1-text">
              <h1>Carlos Torres</h1>
            </Link>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch">
            {navBarLinks && renderLinks(navBarLinks)}
          </div>
          <ThemeButton onThemeChange={onChangeTheme} />
        </div>
      </div>
    </nav>
  );
};
