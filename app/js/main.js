import React from "react";
import router from "./router";
import ReactDOM from "react-dom";

require("./../assets/styles/main.less")

router.run(function (Handler) {
  ReactDOM.render(<Handler/>, document.getElementById("react-root"));
});
