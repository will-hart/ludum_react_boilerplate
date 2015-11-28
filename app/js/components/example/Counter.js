import React from "react"

class Counter {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>

        <button onClick={() => this.props.onIncrement()}>+</button>
        <button onClick={() => this.props.onDecrement()}>-</button>
      </div>
    );
  }
}

// uncomment this to get the store via the react-reflux
// Provider which is wrapping the App component
// Counter.contextTypes = {
//   store: React.PropTypes.object
// }

export default Counter;
