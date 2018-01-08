import { createSelector } from 'reselect';
import defaultDeck, { shape } from "./Defaults";
import { cardIds } from "../cards/Defaults";

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
