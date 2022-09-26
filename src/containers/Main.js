import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

const routes = {
  "/": settings.isSplash ? Splash : Home,
  "/home": Home,
  "/experience": Experience,
  "/education": Education,
  "/opensource": Opensource,
  "/projects": Projects,
  ...(settings.isSplash && { "/splash": Splash }),
  "*": Error404,
};
export default ({ theme }) => (
  <div>
    <HashRouter basename="/">
      <Switch>
        {Object.entries(routes).map(([path, Component]) => (
          <Route
            path={path}
            exact
            render={(props) => <Component {...props} theme={theme} />}
          />
        ))}
      </Switch>
    </HashRouter>
  </div>
);
