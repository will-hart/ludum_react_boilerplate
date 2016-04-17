import React from 'react';
import { mouseTrap } from 'react-mousetrap';

import { refreshPeriod, halfHeight, halfWidth } from '../../constants/Attributes';


import './Player.scss';


class Player extends React.Component {
  static propTypes = {
    addObject: React.PropTypes.func.isRequired,
    updateFrame: React.PropTypes.func.isRequired,
    spawnDelay: React.PropTypes.number.isRequired,
    changeShape: React.PropTypes.func.isRequired,
    isPlaying: React.PropTypes.bool.isRequired,
    playerType: React.PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);

    this._performUpdate = this._performUpdate.bind(this);
    this._performSpawn = this._performSpawn.bind(this);

    this.spawnTimer = null;
    this.isPlaying = true;
  }

  componentWillMount() {
    const { changeShape } = this.props;

    this.props.bindShortcut('a', () => changeShape(0));
    this.props.bindShortcut('s', () => changeShape(1));
    this.props.bindShortcut('d', () => changeShape(2));
    this.props.bindShortcut('f', () => changeShape(3));
  }

  componentDidMount() {
    window.requestAnimationFrame(this._performUpdate);
    this.spawnTimer = setTimeout(this._performSpawn, this.props.spawnDelay);
  }

  componentWillUnmount() {
    this.isPlaying = false;

    clearTimeout(this.spawnTimer);

    this.props.unbindShortcut('a');
    this.props.unbindShortcut('s');
    this.props.unbindShortcut('d');
    this.props.unbindShortcut('f');
  }

  _performUpdate() {
    if (this.isPlaying)
    {
      this.props.updateFrame();
      window.requestAnimationFrame(this._performUpdate);
    }
  }

  _performSpawn() {
    if (this.isPlaying)
    {
      this.props.addObject();
      this.spawnTimer = setTimeout(this._performSpawn, this.props.spawnDelay);
    }
  }

  render() {
    const { playerType } = this.props;

    return (
      <g>
        <circle cx={400} cy={300} r={30} fill="none" stroke="white" strokeWidth="1" strokeDasharray="5, 5" strokeOpacity="0.5" />

        {playerType === 0 && <circle cx={halfWidth} cy={halfHeight} r={10} fill="none" strokeWidth="1" stroke="white" />}
        {playerType === 1 && <rect x={halfWidth - 10} y={halfHeight - 10} width={20} height={20} fill="none" strokeWidth="1" stroke="white" />}
        {playerType === 2 && <rect x={halfWidth - 10} y={halfHeight - 10} width={20} height={20} fill="none" strokeWidth="1" stroke="white" rx="5" ry="5" />}
        {playerType === 3 && <polygon points={(halfWidth - 10) + "," + (halfHeight - 10) + " " + (halfWidth + 10) + "," + (halfHeight - 10) + " " + halfWidth + "," + (halfHeight + 10)} fill="none" strokeWidth="1" stroke="white" />}
      </g>
    );
  }
}

export default mouseTrap(Player);
