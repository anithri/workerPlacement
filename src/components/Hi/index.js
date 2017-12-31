import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

class Hi extends React.Component {
  render() {
    const cssClasses = cx(styles.Hi, this.props.className)
    return (
      <div className={cssClasses}>
        <h3>Hi</h3>
        {this.props.children}
      </div>
    );
  }
}

Hi.propTypes = propTypes;
export default Hi;
