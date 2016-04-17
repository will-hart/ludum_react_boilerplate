import React from 'react';
import './Obstacle.scss';

const fills = [
  '#333333',
  '#26664D',
  '#AD8937',
  '#AA2222'
];

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
      <circle
        cx={this.props.x} cy={this.props.y} r={8}
        stroke="white"
        fill={fills[this.props.type]}
      />
    );
  }
}
