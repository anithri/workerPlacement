import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import {currentRound} from '../game/Selectors';

export const shape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  spheres: PropTypes.arrayOf(PropTypes.string).isRequired
});

export const all = state => state.players;

export const find = (playerId, state) => all(state)[playerId];

export const current = createSelector(
  [all, currentRound],
  (players, round) => Object.values[]
);

export const current = state => {
  const r = state.game
};
const selectors = {
  all,
  find,
  shape
};

export default selectors;
