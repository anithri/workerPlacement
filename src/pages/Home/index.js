import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";

import Adjust from '../../panes/StyleAdjust';
import Navigation from '../../panes/StyleNavigation';
import Display from '../../panes/StyleDisplay';

class Home extends React.Component {
  render() {
    const cssClasses = cx(
      "Page","HomePage",
      styles.home,
      this.props.className
    );

    return (
      <div className={cssClasses}>
        <Adjust className={styles.adjust} />
        <Navigation className={styles.navigation} />
        <Display className={styles.display} />
      </div>
    );
  }
}

Home.propTypes = {
  className: PropTypes.string
};

export default Home;
