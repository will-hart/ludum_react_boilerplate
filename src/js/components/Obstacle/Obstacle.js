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
    const { type, x, y } = this.props;

    return (
      <g>
        {type === 0 && <circle
          cx={x} cy={y} r={8}
          stroke="white"
          fill={fills[type]}
        />}

        {type === 1 && <rect
          x={x} y={y} width={16} height={16}
          stroke="white"
          fill={fills[type]}
        />}

        {type === 2 && <rect
          x={x} y={y} width={16} height={16}
          rx="5" ry="5"
          stroke="white"
          fill={fills[type]}
        />}

        {type === 3 && <polygon
          points={(x - 8) + "," + (y - 8) + " " + (x + 8) + "," + (y - 8) + " " + (x) + "," + (y + 8)}
          stroke="white"
          fill={fills[type]}
        />}
      </g>
    );
  }
}
