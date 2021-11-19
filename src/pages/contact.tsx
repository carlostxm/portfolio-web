import React from "react";
import logo from "../logo.svg";
import { PageProps } from "./pages.model";

export const Contact: React.FC<PageProps> = (props) => {
  const { id } = props;
  return (
    <div data-testid={id}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is the Contact page</p>
    </div>
  );
};
