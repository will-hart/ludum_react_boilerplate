import './Twirlygig.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GameOver, Instructions, Obstacle, Player, Score } from '../../components';
import { getXY } from '../../lib';

import * as ObstacleActions from '../../actions/ObstacleActions';

class Twirlygig extends Component {
  static propTypes = {
    isPlaying: React.PropTypes.bool.isRequired,
    playerType: React.PropTypes.number.isRequired,
    nextItem: React.PropTypes.number.isRequired,
    score: React.PropTypes.number.isRequired,
    obstacles: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { played: false };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      played: this.state.played || nextProps.isPlaying
    });
  }

  _getObstacles(items, playerType) {
    return Object.keys(items).map((key) => {
      const obstacle = items[key];
      const coords = getXY(obstacle.r, obstacle.theta);
      return <Obstacle key={obstacle.id} x={coords.x} y={coords.y} playerType={playerType} type={obstacle.type} />;
    });
  }

  render () {
    const { actions, isPlaying, nextItem, playerType } = this.props;
    const canvasClasses = "twirlygig player-type-" + playerType;

    return (
      <div className={canvasClasses}>
        <div className="game-canvas">
          {isPlaying && (
            <svg width="800" height="600">
              <Player
                addObject={actions.addObstacle}
                updateFrame={actions.updateFrame}
                spawnDelay={nextItem}
                changeShape={actions.changeKey}
                isPlaying={isPlaying} />

              <g>
                {this._getObstacles(this.props.obstacles, playerType)}
              </g>
            </svg>
          )}

          {isPlaying && this.state.played && <Score score={this.props.score} />}

          {!isPlaying && this.state.played && <GameOver score={this.props.score} />}

          {!isPlaying && <Instructions newGame={actions.newGame} />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPlaying: state.obstacles.isPlaying,
    playerType: state.obstacles.activeKey,
    nextItem: state.obstacles.nextItem,
    score: state.obstacles.score,
    obstacles: state.obstacles.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ObstacleActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twirlygig);
