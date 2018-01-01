import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import players from 'store/selectors/players';
import styles from "./styles.css";

const propTypes = {
  className: PropTypes.string,
  playerId: PropTypes.string.isRequired,
  player: players.shape
};

class Player extends React.Component {
  render() {
    const {className, player} = this.props;
    const cssClasses = cx(styles.Player, className);
    return (
      <div className={cssClasses}>
        <h3>{player.name}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    player: players.find(ownProps.playerId, state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//   return {...ownProps, ...stateProps, ...dispatchProps};
// };

Player.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
  /* mergeProps */
)(Player);
