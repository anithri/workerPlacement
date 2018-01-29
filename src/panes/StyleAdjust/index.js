import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";

class StyleAdjust extends React.Component {
  render() {
    const cssClasses = cx(
      styles.adjust,
      this.props.className,
      this.props.theme
    );

    return (
      <div className={cssClasses}>
        Style Adjust
      </div>
    );
  }
}

StyleAdjust.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};


export default StyleAdjust;
