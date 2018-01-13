import { createSelector } from 'reselect';
import { shape } from "./Defaults"

export const all = state => state.game;

export const find = (id, state) => all(state)[id];

export const currentRound = state => state.game.round;

export const currentPlayerId = createSelector(
  [all, currentRound],
  (playerIds, round) => playerIds[playerIds.length % round]
);

const selectors = {
  shape,
  all,
  find
};

export default selectors;
