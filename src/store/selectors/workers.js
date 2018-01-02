import { createSelector } from 'reselect';
import {shape, workerShape} from "../defaults/workers";

export const all = state => state.workers;
export const find = (workerId, state) => all(state)[workerId];

const selectors = {
  shape,
  workerShape,
  all,
  find
};

export default selectors;
