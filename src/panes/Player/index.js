import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { connect } from 'react-redux';
import qPlayers from 'concerns/players/Selectors';
import qWorkers from 'concerns/workers/Selectors';
import qGame from 'concerns/game/Selectors';

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
    const {className, player, spheres, themeId, isCurrent, isWinner} = this.props;
    const globalTheme = this.context.theme.Player;
    const playerTheme = this.context.theme[themeId];
    console.log('PLAYER', globalTheme, playerTheme)
    const cssClasses = cx(
      className,
      globalTheme,
      playerTheme,
      styles.Player,
      {
        [styles.current]: isCurrent,
        [styles.winner]: isWinner
      }
    );
    return (
      <section className={cssClasses}>
        <header>
          <h3>{player.name}</h3>
          <h3>{player.score}</h3>
          <Badge {...spheres[0]} />
          <Badge {...spheres[1]} />
          <Badge {...spheres[2]} />
        </header>
        <main>
          &nbsp;
        </main>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const player = qPlayers.find(ownProps.playerId, state);
  const workerIds = player.spheres;
  const spheres = workerIds.map(id => qWorkers.find(id, state));
  const isCurrent = qGame.isCurrentPlayerId(ownProps.playerId, state);
  const isWinner = false;
  const themeId = player.theme;
  return {
    player,
    spheres,
    isCurrent,
    isWinner,
    themeId
  };
};

Player.contextTypes = {
  theme: PropTypes.object
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
