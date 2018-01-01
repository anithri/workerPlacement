import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import messages from "store/selectors/messages";

import styles from "./styles.css";

const propTypes = {
  className: PropTypes.string,
  messages: PropTypes.arrayOf(messages.shape)
};

class Messages extends React.Component {
  render() {
    const cssClasses = cx(styles.Messages, this.props.className)
    return (
      <div className={}>
        <h3>Messages</h3>
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

Messages.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps/* , */
  /* mergeProps */
)(Messages);
