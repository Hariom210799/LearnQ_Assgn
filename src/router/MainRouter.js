import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/MainPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route component={ErrorPage} />
  </Switch>
);

export default Main;
