import React from "react";
import cx from "classnames";
import styles from "./styles.css";

const Badge = ({name, theme, className}) => {
  return (
    <span className={cx(styles.Badge, theme, className)}>{name}</span>
  );
};

export default Badge;
