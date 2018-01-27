import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";

import Game from "containers/Game";

class Home extends React.Component {
  render() {
    const cssClasses = cx(
      "Page","HomePage",
      styles.home,
      this.props.className
    );

    return (
      <Game className={cssClasses} grid={styles} />
    );
  }
}

Home.propTypes = {
  className: PropTypes.string
};


export default Home;
