import React from 'react';
import './Obstacle.scss';

export default class Obstacle extends React.Component {
  static propTypes = {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    type: React.PropTypes.number.isRequired
  }

  render() {
    const style = {
      top: this.props.y,
      left: this.props.x
    };

    return (
      <div className="obstacle" style={style}></div>
    );
  }
}
