import React from "react";
import logo from "../logo.svg";
import { PageProps } from "./pages.model";

export const Home: React.FC<PageProps> = (props) => {
  const { id } = props;
  return (
    <section className="container px-4 py-10 mx-auto" data-testid={id}>
      <h1 className="p-4 text-3xl md:text-5xl">
        Engineer, Software developer and Front-end specialist.
      </h1>
      <h2 className="p-4 text-xl md:text-2xl">
        Think. Design. Specify. Implement. Test. Broke. Fix. Test. Optimize.
        Test. Build. Ship.
      </h2>
      <div className="flex justify-center">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </section>
  );
};
