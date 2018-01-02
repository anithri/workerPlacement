import { createSelector } from 'reselect';
import { shape } from "../defaults/deck"

export const all = state => state.deck;

export const find = (id, state) => all(state)[id];

const selectors = {
  shape,
  all,
  find
};

export default selectors;
