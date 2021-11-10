import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HashRouter as Router } from "react-router-dom";
import App from "./app";
import { ROUTING_CONFIG } from "./conts";

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
