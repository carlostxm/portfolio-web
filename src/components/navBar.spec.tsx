import React from "react";
import { render, screen } from "@testing-library/react";
import { NavBar } from ".";
import { NavBarLink } from "./navBar.model";
import { HashRouter } from "react-router-dom";

const LINKS: NavBarLink[] = [
  {
    label: "CV",
    reference: "/reference",
  },
  {
    label: "About",
    reference: "/about",
  },
];

test("create links based on props", () => {
  // NavBar is rendered inside of <Router> as <Link> only work in this context.
  render(
    <HashRouter>
      <NavBar links={LINKS} />
    </HashRouter>,
  );

  expect(screen.getByText(LINKS[0].label)).toBeTruthy();
  expect(screen.getByText(LINKS[1].label)).toBeTruthy();
});
