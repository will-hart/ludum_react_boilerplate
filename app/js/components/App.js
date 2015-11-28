import React from "react"
import { RouteHandler } from "react-router";
import { Provider } from "react-redux"

import NavBar from "./NavBar"
import store from "../store"


class App extends React.Component{
  render() {
    return (
      <div>
        <NavBar/>
        <Provider store={store}>
          <RouteHandler />
        </Provider>
      </div>);
  }
};

export default App;
