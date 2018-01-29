import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.css';

class ColorSwatch extends React.Component {
  render() {
    const css = cx(styles.swatch, this.props.className, this.props.theme);

    return (
      <div className={css}>
        {this.props.children}
      </div>
    );

  }
}

ColorSwatch.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ColorSwatch;
