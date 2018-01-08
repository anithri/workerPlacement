import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { connect } from 'react-redux';
import qDeck from 'store/selectors/deck';
import qBag from "store/selectors/bag";
import Player from "panes/Player";
import Messages from "panes/Messages";
import Drafting from "panes/Drafting";
import Projects from "panes/Projects";
import actions from "redux-auto";

const propTypes = {
  className: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.string),
  regions: PropTypes.objectOf({
    "playerOne": PropTypes.string.isRequired,
    "playerTwo": PropTypes.string.isRequired,
    "playerThree": PropTypes.string.isRequired,
    "playerFour": PropTypes.string.isRequired,
    "drafting": PropTypes.string.isRequired,
    "projects": PropTypes.string.isRequired,
    "messages": PropTypes.string.isRequired
  })

};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
    }
  }
  componentDidMount() {
    if (this.props.phase < 0) {
      actions.game.start({
        deck: this.props.newDeck,
        bag: this.props.newBag
      });
    }
    // generate a new deck
  }

  render() {
    const {className, regions, themes} = this.props;
    return (
      <div className={className}>
        <Player className={regions.playerOne} playerId="One"/>
        <Player className={regions.playerTwo} playerId="Two"/>
        <Player className={regions.playerThree} playerId="Three"/>
        <Player className={regions.playerFour} playerId="Four"/>
        <Drafting className={regions.drafting}/>
        <Projects className={regions.projects}/>
        <Messages className={regions.messages}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const newDeck = state.game.deck ? null : qDeck.deal(state);
  const newBag = state.game.bag ? null : qBag.fresh(state);
  return {
    phase: state.game.phase,
    order: state.game.order,
    deck: state.game.deck,
    bag: state.game.bag,
    newDeck,
    newBag,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {...ownProps, ...stateProps, ...dispatchProps};
};

Game.defaultProps = {
  themes: {}
};
Game.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps/* , */
  /* mergeProps */
)(Game);
