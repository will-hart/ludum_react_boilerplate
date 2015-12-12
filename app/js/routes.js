import React from "react";
import Router, {Route, RouteHandler, DefaultRoute} from "react-router";

import App from "./components/App";
import BaseRoute from "./components/routes/BaseRoute";
import Intro from "./components/routes/Intro";
import Game from "./components/routes/Game";


export default (
  <Route handler={App} path="/">
    <Route name="home" path="/" handler={BaseRoute} />
    <Route name="intro" path="/intro" handler={Intro} />
    <Route name="game" path="/play" handler={Game} />
  </Route>
);
