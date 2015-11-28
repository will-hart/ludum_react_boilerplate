import React from "react"
import router from "./router"

require("./../assets/styles/main.less")

router.run(function (Handler) {
  React.render(<Handler/>, document.body);
});
