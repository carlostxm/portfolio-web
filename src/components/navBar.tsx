import React from "react";
import logo from "../logo.svg";
import { NavBarLink, NavBarProps } from "./navBar.model";

const renderLinks = (links: NavBarLink[]): React.ReactNode => {
  const content: React.ReactNode = null;
  if (links.length > 0) {
    return (
      <div className="sm:block sm:ml-6">
        <div className="flex space-x-4">
          {links.map((link) => (
            <a
              href={link.reference}
              className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    );
  }
  return content;
};

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { links } = props;
  return (
    <nav className="w-full bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-between">
            <div className="flex items-center flex-shrink-0">
              <img className="block w-auto h-8" src={logo} alt="Workflow" />
            </div>
            {links && renderLinks(links)}
          </div>
        </div>
      </div>
    </nav>
  );
};
