import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBarLink } from "./components/navBar.model";

interface AppRouterProps {
  routes: NavBarLink[];
}

export const AppRouter: React.FC<AppRouterProps> = (props) => {
  const { routes } = props;
  return (
    <Routes>
      <Route path="/">
        {routes.map((route) => (
          <Route
            index={route.isHome}
            path={route.isHome ? undefined : route.reference}
            element={React.createElement(route.page, {
              id: route.id,
            })}
          />
        ))}
      </Route>
    </Routes>
  );
};
