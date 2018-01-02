import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";
import Player from "panes/Player";
import Messages from "panes/Messages";
import Drafting from "panes/Drafting";

const propTypes = {
  className: PropTypes.string
};

class Home extends React.Component {
  render() {
    const cssClasses = cx(styles.Home, this.props.className, 'max');
    return (
      <div className={cssClasses}>
        <Player className={styles.playerOne} playerId="One"/>
        <Player className={styles.playerTwo} playerId="Two"/>
        <Player className={styles.playerThree} playerId="Three"/>
        <Player className={styles.playerFour} playerId="Four"/>
        <Drafting className={styles.drafting}/>
        <div className={styles.projects}>
          <h1>Projects</h1>
        </div>
        <Messages className={styles.messages}/>
      </div>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
