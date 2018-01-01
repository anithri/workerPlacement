import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
const BadgeRow = ({className, children}) => {

  return (
    <ul>

    </ul>
  );
};

const Badge = ({className, children}) => {
  return (
    <span className={cx(styles.Badge, className)}>{children}</span>
  );
};
Badge.propTypes = propTypes;
export default Badge;
