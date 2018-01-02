import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { connect } from 'react-redux';
import Player from "panes/Player";
import Messages from "panes/Messages";
import Drafting from "panes/Drafting";
import Projects from "panes/Projects";

import styles from "./styles.css";

const propTypes = {
  className: PropTypes.string,
  regions: PropTypes.objectOf({
    "playerOne": PropTypes.string.isRequired,
    "playerTwo": PropTypes.string.isRequired,
    "playerThree": PropTypes.string.isRequired,
    "playerFour": PropTypes.string.isRequired,
    "drafting": PropTypes.string.isRequired,
    "projects": PropTypes.string.isRequired,
    "messages": PropTypes.string.isRequired,
  }),

};

class Game extends React.Component {
  render() {
    const {className, regions} = this.props
    const cssClasses = cx(styles.Game, className)
    return (
      <div className={cssClasses}>
        <Player className={regions.playerOne} playerId="One"/>
        <Player className={regions.playerTwo} playerId="Two"/>
        <Player className={regions.playerThree} playerId="Three"/>
        <Player className={regions.playerFour} playerId="Four"/>
        <Drafting className={regions.drafting}/>
        <Projects className={regions.projects}/>
        <Messages className={regions.messages}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {...ownProps, ...stateProps, ...dispatchProps};
}

Game.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps/* , */
  /* mergeProps */
)(Game);
