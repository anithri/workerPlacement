import { createSelector } from 'reselect';
import { shape } from "../defaults/deck";
import defaultDeck from "../defaults/deck";
import { cardIds } from "../defaults/cards";

export const deal = (state) => {
  return {
    ...defaultDeck,
    active: cardIds.slice(16, 0),
    draw: cardIds.slice(16)
  };
};

const selectors = {
  shape,
  deal
};

export default selectors;
