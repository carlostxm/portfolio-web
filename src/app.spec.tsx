import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HashRouter as Router } from "react-router-dom";
import App from "./app";
import {
  ROUTING_CONFIG,
  THEME_DARK_ICON_TESTID,
  THEME_LIGHT_ICON_TESTID,
  THEME_ROOT_TESTID,
} from "./conts";
import { Theme } from "./model";

test("app routing/navigation", () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  expect(
    // Check that Home page is shown
    screen.getByTestId(ROUTING_CONFIG[0].id),
  ).toBeInTheDocument();
  ROUTING_CONFIG.filter((routeConfig) => !routeConfig.isHome).forEach(
    (navLink) => {
      expect(screen.getByText(navLink.label)).toBeInTheDocument();
      const leftClick = { button: 0 };
      userEvent.click(screen.getByText(navLink.label), leftClick);
      // Check that new page has been shown after click on the link
      expect(screen.getByTestId(navLink.id)).toBeInTheDocument();
    },
  );
});

test("theme is set initially to dark", () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  expect(screen.getByTestId(THEME_ROOT_TESTID)).toBeInTheDocument();
  expect(screen.getByTestId(THEME_DARK_ICON_TESTID)).toBeInTheDocument();
  expect(screen.getByTestId(THEME_ROOT_TESTID)).toHaveClass(Theme.dark);
});

test("theme change to dark when dark button theme button is clicked", () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  expect(screen.getByTestId(THEME_ROOT_TESTID)).toHaveClass(Theme.dark);
  fireEvent(
    screen.getByTestId(THEME_DARK_ICON_TESTID),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(screen.getByTestId(THEME_ROOT_TESTID)).toHaveClass(Theme.light);
  expect(screen.getByTestId(THEME_LIGHT_ICON_TESTID)).toBeInTheDocument();
});
