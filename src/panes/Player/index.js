import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { connect } from 'react-redux';
import qPlayers from 'concerns/players/Selectors';
import qWorkers from 'concerns/workers/Selectors';
import styles from "./styles.css";
import actions from "redux-auto";
import Badge from 'components/Badge';

const propTypes = {
  className: PropTypes.string,
  playerId: PropTypes.string.isRequired,
  player: qPlayers.shape,
  spheres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired
  })).isRequired
};

class Player extends React.Component {
  render() {
    const {className, player, spheres} = this.props;
    const cssClasses = cx(styles.Player, className);
    return (
      <div className={cssClasses}>
        <header>
          <h3>{player.name}</h3>
          <h3>{player.score}</h3>
          <Badge {...spheres[0]} />
          <Badge {...spheres[1]} />
          <Badge {...spheres[2]} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const player = qPlayers.find(ownProps.playerId, state);
  const workerIds = player.spheres;
  const spheres = workerIds.map(id => qWorkers.find(id, state));
  return {
    player,
    spheres
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
