import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";
import Swatch from "components/ColorSwatch";


class StyleDisplay extends React.Component {
  render() {
    const cssClasses = cx(
      styles.display,
      this.props.className
    );

    return (
      <div className={cssClasses}>
        <Swatch theme="defaultTheme primary">
          <h3>defaultTheme<br />Primary</h3>
        </Swatch>
        <Swatch theme="defaultTheme reading">
          <h3>defaultTheme<br />Reading</h3>
        </Swatch>
        <Swatch theme="defaultTheme inverse">
          <h3>defaultTheme<br />Inverse</h3>
        </Swatch>
        <Swatch theme="defaultTheme outline">
          <h3>defaultTheme<br />Outline</h3>
        </Swatch>
        <Swatch theme="defaultTheme dark">
          <h3>defaultTheme<br />Dark</h3>
        </Swatch>
      </div>
    );
  }
}

StyleDisplay.propTypes = {
  className: PropTypes.string
};


export default StyleDisplay;
