import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { connect } from 'react-redux';

import messageSelectors from "store/selectors/messages";

import styles from "./styles.css";

const propTypes = {
  className: PropTypes.string,
  messages: PropTypes.arrayOf(messageSelectors.shape).isRequired
};

const Message = ({id, body}) => <li key={id} className={styles.message}>{body}</li>

class Messages extends React.Component {
  render() {
    const {className, messages} = this.props;
    const cssClasses = cx(styles.Messages, className);
    const messageBlocks = messages.map((m) => <Message id={m.id} body={m.body} />);
    return (
      <div className={cssClasses}>
        <ul className={styles.messageList}>
          {messageBlocks}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    messages: messageSelectors.current(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

Messages.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
