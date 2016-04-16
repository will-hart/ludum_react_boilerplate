import React from 'react';
import './Obstacle.scss';

export default class Obstacle extends React.Component {
  static propTypes = {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    type: React.PropTypes.number.isRequired,
    playerType: React.PropTypes.number.isRequired
  }

  render() {
    const style = {
      top: this.props.y,
      left: this.props.x
    };

    const obstacleClasses = "obstacle player-type-" + this.props.type;

    return (
      <div className={obstacleClasses} style={style}></div>
    );
  }
}
