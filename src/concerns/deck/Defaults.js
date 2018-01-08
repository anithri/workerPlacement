import PropTypes from "prop-types";
import defaultPlayers from "../players/Defaults";

const players = Object.keys(defaultPlayers);

const deckShape = PropTypes.arrayOf(PropTypes.string).isRequired;

export const shape = PropTypes.shape({
  draw: deckShape,
  discard: deckShape,
  active: deckShape
});

const defaultDeck = {
  draw: [],
  discard: [],
  active: []
};

players.forEach(p => {
  shape[p] = deckShape;
  defaultDeck[p] = [];
});

export default defaultDeck;
