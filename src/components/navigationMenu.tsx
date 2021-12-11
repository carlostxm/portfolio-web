import React from "react";

export const NavigationMenu: React.FC = () => {
  const [isMenuOpened, setMenuOpened] = React.useState(false);
  const handleNavigationMenuClick = () => {
    setMenuOpened(!isMenuOpened);
  };
  return (
    <>
      <div className="flex items-center sm:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={handleNavigationMenuClick}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="block w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className="hidden w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
              aria-current="page"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>

            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
