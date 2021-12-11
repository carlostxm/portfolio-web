import React from "react";
import { Link } from "react-router-dom";
import { NavBarLink, NavBarProps } from "./navBar.model";

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

export const NavigationBar: React.FC<NavBarProps> = (props) => {
  const { links } = props;
  // All links except Home as is rendered outside this NavBar
  const navBarLinks = links.filter((link) => !link.isHome);
  return (
    <>
      <div className="flex items-center flex-shrink-0">
        <Link to="/" className="px-3 py-2 rounded-md link-level1-text">
          <h1>Carlos Torres</h1>
        </Link>
      </div>
      <div className="hidden sm:justify-center sm:flex-1 sm:items-stretch sm:flex">
        {navBarLinks && renderLinks(navBarLinks)}
      </div>
    </>
  );
};
