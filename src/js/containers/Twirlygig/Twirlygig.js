import './Twirlygig.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Player } from '../../components';

import * as ObstacleActions from '../../actions/ObstacleActions';

class Twirlygig extends Component {

  render () {
    // const { actions } = this.props;

    return (
      <div className="twirlygig">
        <h1>Twirlygig</h1>

        <div className="game-canvas">
          <Player />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // friendList: state.friendList
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
