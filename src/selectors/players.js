import { createSelector } from 'reselect';

export const all = state => state.players;

export const find = (playerId, state) => all(state)[playerId];

const selectors = {
  all,
  find
};

export default selectors;
