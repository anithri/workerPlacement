import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";

class StyleNavigation extends React.Component {
  render() {
    const cssClasses = cx(
      styles.navigation,
      this.props.className
    );

    return (
      <div className={cssClasses}>
        Style Navigation
      </div>
    );
  }
}

StyleNavigation.propTypes = {
  className: PropTypes.string
};


export default StyleNavigation;
