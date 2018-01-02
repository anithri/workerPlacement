import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";
import Game from "containers/Game";

const propTypes = {
  className: PropTypes.string
};

class Home extends React.Component {
  render() {
    const cssClasses = cx(styles.Home, this.props.className);
    return (
      <Game className={cssClasses} regions={styles}/>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
