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
    const cssClasses = cx(styles.Messages, this.props.className);
    return (
      <div className={cssClasses}>
        <h3>Messages: {this.props.messages.length}</h3>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("OVER HERE", messages);
  return {
    messages: messages.current(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//   return {...ownProps, ...stateProps, ...dispatchProps};
// }

Messages.propTypes = propTypes;
Messages.defaultProps = {messages: []};
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
