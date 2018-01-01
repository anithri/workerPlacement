import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

export const workerShape = PropTypes.shape({
  total: PropTypes.number,
  reserve: PropTypes.number,
  bag: PropTypes.number,
  working: PropTypes.number,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
});

export const shape = PropTypes.shape({
  kgb: workerShape.isRequired,
  party: workerShape.isRequired,
  politburo: workerShape.isRequired,
  proletariat: workerShape.isRequired,
  redarmy: workerShape.isRequired,
});

export const all = state => state.workers;

export const find = (workersId, state) => all(state)[workersId];

const selectors = {
  all,
  find
};

export default selectors;
