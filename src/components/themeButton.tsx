import React from "react";
import { ThemeContext } from "../context";
import { THEME_DARK_ICON_TESTID, THEME_LIGHT_ICON_TESTID } from "../conts";
import { Theme } from "../model";

interface ThemeButtonProps {
  theme?: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const { onThemeChange } = props;
  const theme = React.useContext(ThemeContext);
  const handleClick = () => {
    const toggledTheme = theme === Theme.dark ? Theme.light : Theme.dark;
    onThemeChange(toggledTheme);
  };
  return (
    <button
      className="block w-auto h-8 px-3 py-1 text-gray-700 rounded-md cursor-pointer dark:text-gray-300 dark:hover:text-white hover:text-black"
      onClick={handleClick}
    >
      {theme === Theme.dark ? <DarkThemeIcon /> : <LightThemeIcon />}
    </button>
  );
};

const LightThemeIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      data-testid={THEME_LIGHT_ICON_TESTID}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
};

const DarkThemeIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      data-testid={THEME_DARK_ICON_TESTID}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
};
