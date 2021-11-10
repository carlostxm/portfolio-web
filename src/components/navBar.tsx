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
              className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
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

// TODO: Hover and highlight has been lost with last changes!
export const NavBar: React.FC<NavBarProps> = (props) => {
  const { links } = props;
  // All links except Home as is rendered outside this NavBar
  const navBarLinks = links.filter((link) => !link.isHome);
  return (
    <nav className="w-full bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div>
            <div className="flex items-center flex-shrink-0">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                <h1>Carlos Torres</h1>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch">
            {navBarLinks && renderLinks(navBarLinks)}
          </div>
          <div className="block w-auto h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};
