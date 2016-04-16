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
      background: this.props.type === this.props.playerType ? '#FFF' : '#222',
      top: this.props.y,
      left: this.props.x
    };

    return (
      <div className="obstacle" style={style}></div>
    );
  }
}
