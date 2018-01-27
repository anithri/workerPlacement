import { createSelector } from 'reselect';
import {shape, workerShape} from "./Defaults";
import qBag from "../bag/Selectors";

export const all = state => state.workers.all;
export const ids = state => Object.keys(state.workers.all);
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
