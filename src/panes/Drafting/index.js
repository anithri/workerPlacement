import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { connect } from 'react-redux';
import qWorkers from 'concerns/workers/Selectors';
import styles from "./styles.css";
import Worker from "./Worker";
import DraftingBlock from "./DraftingBlock";

const propTypes = {
  className: PropTypes.string,
  workers: qWorkers.shape
};

class Drafting extends React.Component {
  render() {
    const cssClasses = cx(styles.Drafting, this.props.className);
    const workerBlocks = this.props.workers.map(m => <Worker {...m} className={styles.block}/>);
    return (
      <div className={cssClasses}>
        {workerBlocks}
        <DraftingBlock className={styles.draftingBlock} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    workers: Object.values(qWorkers.summarizedWorkers(state)),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

Drafting.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drafting);
