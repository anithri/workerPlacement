import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";
import theme from "./themes.css";

import Game from "containers/Game";

class Home extends React.Component {
  getChildContext() {
    return {theme: theme};
  }

  render() {
    const cssClasses = cx(
      styles.Home,
      theme.Home,
      this.props.className
    );

    return (
      <Game className={cssClasses} grid={styles} />
    );
  }
}

Home.childContextTypes = {
  theme: PropTypes.object
};

Home.propTypes = {
  className: PropTypes.string
};


export default Home;
