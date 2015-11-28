import React from "react"
import Boilerplate from "../boilerplate/Boilerplate"


class BaseRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Boilerplate />
        <hr/>
        {this.props.children}
      </div>);
  }
}

export default BaseRoute;
