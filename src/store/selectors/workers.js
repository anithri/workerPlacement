import { createSelector } from 'reselect';
import {shape, workerShape} from "../defaults/workers";
import qBag from "../selectors/bag";

export const all = state => state.workers;
export const ids = state => Object.keys(state.workers);
export const find = (workerId, state) => findWorker(workerId, state);

export const findWorker = (workerId, state) => {
  return summarizedWorkers(state)[workerId];
};

export const summarizedWorkers = createSelector(
  [all, qBag.workerSummaries],
  (indexedWorkers, summaries) => {
    const output = {};
    Object.keys(indexedWorkers).forEach(w => {
      output[w] = {
        ...indexedWorkers[w],
        summary: summaries[w]
      }
    });
    return output;
  }
);

const selectors = {
  shape,
  workerShape,
  all,
  find,
  summarizedWorkers
};

export default selectors;
