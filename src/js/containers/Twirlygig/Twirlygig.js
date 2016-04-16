import './Twirlygig.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Instructions, Player } from '../../components';

import * as ObstacleActions from '../../actions/ObstacleActions';

class Twirlygig extends Component {

  render () {
    const { actions, isPlaying, nextItem } = this.props;

    return (
      <div className="twirlygig">
        <div className="game-canvas">
          {isPlaying && <Player
            addObject={actions.addObstacle}
            updateFrame={actions.updateFrame}
            spawnDelay={nextItem} />}
          {!isPlaying && <Instructions newGame={actions.newGame} />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPlaying: state.obstacles.isPlaying,
    nextItem: state.obstacles.nextItem
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
