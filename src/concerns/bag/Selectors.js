import { createSelector } from 'reselect';
import { shape } from "./Defaults"
import defaultBag from "./Defaults";

export const current = (state) => state.game.bag;
export const workerSummaries = createSelector(
  [current],
  (bag) => {
    if (! bag) return {};
    const summarized = {};
    Object.keys(bag.draw).forEach(w => {
      const active = Object.values(bag.projects).reduce(p => (p[w]), 0);
      summarized[w] = {
        draw: bag.draw[w],
        reserve: bag.reserve[w],
        dead: bag.dead[w],
        active
      };
    });
    return summarized;
  }
);

export const fresh = (state) => {
  return {
    ...defaultBag,
  }
};

const selectors = {
  shape,
  current,
  fresh,
  workerSummaries
};

export default selectors;
