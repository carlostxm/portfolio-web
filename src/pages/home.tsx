import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { PageProps } from "./pages.model";

export const Home: React.FC<PageProps> = (props) => {
  const { id } = props;
  return (
    <section className="container px-4 py-10 mx-auto" data-testid={id}>
      <h1 className="p-4 h1-text">
        Engineer, Software developer and Front-end specialist.
      </h1>
      <h2 className="p-4 h2-text">
        Think. Design. Specify. Test. Break. Implement. Test. Optimize. Test.
        Build. Ship.
      </h2>
      <div className="justify-center mt-5 sm:mt-8 sm:flex">
        <div className="rounded-md shadow">
          <Link
            to="/about"
            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            <h1>More about Carlos</h1>
          </Link>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Link
            to="/about"
            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-gray-700 border border-transparent rounded-md dark:text-black dark:bg-gray-300 hover:bg-black dark:hover:bg-white md:py-4 md:text-lg md:px-10"
          >
            <h1>Contact</h1>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </section>
  );
};
