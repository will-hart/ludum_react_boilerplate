import React from "react"
import {connect} from "react-redux";

import ThingSelector from "../../selectors/ThingSelector";


class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>

        <button onClick={() => this.props.onIncrement()}>+</button>
        <button onClick={() => this.props.onDecrement()}>-</button>

        <div style={{marginTop: "1em", fontWeight:"bolder"}}>
        	Thing says: 
        	<span style={{fontWeight: "normal", color: "#888", marginLeft: "1em"}}>
        		{this.props.thingStatement}
        	</span>
        </div>
      </div>
    );
  }
}

// uncomment this to get the store via the react-reflux
// Provider which is wrapping the App component
// Counter.contextTypes = {
//   store: React.PropTypes.object
// }

export default connect(ThingSelector)(Counter);
