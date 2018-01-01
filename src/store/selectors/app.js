import { createSelector } from 'reselect';

export const all = state => state.app;

export const find = (appId, state) => all(state)[appId];

const selectors = {
  all,
  find
};

export default selectors;
