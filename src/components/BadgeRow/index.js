import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";

const Badge = ({className, children}) => {
  return (
    <span className={cx(styles.Badge, className)}>{children}</span>
  );
};

const propTypes = {
  badges: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string
};

const BadgeRow = ({badges, className}) => {

  const all = badges.map(({name, id, theme}) => {
    return (
      <Badge className={theme} key={id}>{name}</Badge>
    );
  });

  return (
    <ul className={cx(className, styles.BadgeRow)}>
      {all}
    </ul>
  );
};

BadgeRow.propTypes = propTypes;

export default BadgeRow;
