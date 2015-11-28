import React from "react"
import Router, {Route, RouteHandler, DefaultRoute} from "react-router"

import App from "./components/App"
import BaseRoute from "./components/routes/BaseRoute"

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={BaseRoute} />
    <Route name="home" handler={BaseRoute}/>
  </Route>
);
