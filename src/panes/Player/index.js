import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { connect } from 'react-redux';
import players from 'store/selectors/players';
import Badge from "components/Badge";
import styles from "./styles.css";

const propTypes = {
  className: PropTypes.string,
  playerId: PropTypes.string.isRequired,
  player: players.shape,
  spheres: PropTypes.arrayOf(PropTypes.string).isRequired
};

class Player extends React.Component {
  render() {
    const {className, player, spheres} = this.props;
    const cssClasses = cx(styles.Player, className);
    // key={s} className={s}>{s}</Badgeli>
    const badges = player.spheres.map(s => <li key={s}><Badge className={s}>{s}</Badge></li>)
    return (
      <div className={cssClasses}>
        <header>
          <h3>{player.name}</h3>
        </header>
        <ul className={styles.badgeRow}>
          {badges}
        </ul>
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
