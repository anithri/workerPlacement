import { createSelector } from 'reselect';
import _shuffle from "lodash/shuffle";

import { shape } from "./Defaults"

export const all = state => state.cards;
export const allIds = state => Object.keys(state.cards);
export const find = (cardId, state) => all(state)[cardId];

export const shuffledDeck = (state) => _shuffle(allIds(state));

const selectors = {
  shape,
  all,
  shuffledDeck,
  find
};

export default selectors;
