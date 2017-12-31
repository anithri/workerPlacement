import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";

import Hi from "components/Hi";

const propTypes = {
  className: PropTypes.string,
};

class Home extends React.Component {
  render() {
    const cssClasses = cx(styles.Home, this.props.className, 'max');
    return (
      <div className={cssClasses}>
        <Hi>
          <h1>Home Page</h1>
        </Hi>
      </div>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
