import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from "./styles.css";

const propTypes = {
  className: PropTypes.string,
};

class Drafting extends React.Component {
  render() {
    const cssClasses = cx(styles.Drafting, this.props.className)
    return (
      <div className={}>
        <h3>Drafting</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {...ownProps, ...stateProps, ...dispatchProps};
}

Drafting.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps/* , */
  /* mergeProps */
)(Drafting);
