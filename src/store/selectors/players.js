import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

export const shape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  spheres: PropTypes.arrayOf(PropTypes.string).isRequired
});

export const all = state => state.players;

export const find = (playerId, state) => all(state)[playerId];

const selectors = {
  all,
  find,
  shape
};

export default selectors;
