import { createSelector } from 'reselect';
import { shape } from "./Defaults"

export const all = state => state.game;

export const find = (id, state) => all(state)[id];

const selectors = {
  shape,
  all,
  find
};

export default selectors;
