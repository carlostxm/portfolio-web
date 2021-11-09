import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { NavBar } from ".";
import { NavBarLink } from "./navBar.model";

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
  render(<NavBar links={LINKS} />);

  expect(screen.getByText(LINKS[0].label)).toBeTruthy();
  expect(screen.getByText(LINKS[1].label)).toBeTruthy();
});
