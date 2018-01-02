import { createSelector } from 'reselect';
import { shape } from "../defaults/bag"

export const all = state => state.bag;

export const find = (id, state) => all(state)[id];

const selectors = {
  shape,
  all,
  find
};

export default selectors;
