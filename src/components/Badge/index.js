import React from "react";
import PropTypes from 'prop-types';
import cx from "classnames";
import styles from "./styles.css";

const Badge = ({name, theme, className}) => {
  return (
    <span className={cx(styles.Badge, theme, className)}>{name}</span>
  );
};

Badge.contextTypes = {
  theme: PropTypes.object
};

export default Badge;
