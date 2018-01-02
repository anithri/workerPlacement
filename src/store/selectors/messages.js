import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

export const shape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
});

export const all = (state) => state.messages.all;
export const showing = (state) => state.messages.showing;

const current = createSelector(
  [all, showing],
  (messages,show) => {
    return messages.slice(-1 * Math.max(messages.length - show, messages.length))
  }
);

const selectors = {
  shape,
  all,
  current,
};

export default selectors;
