import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

export const shape = PropTypes.shape({
  body: PropTypes.string.isRequired,
});
export const all = state => state.messages;

export const find = (messageId, state) => all(state)[messageId];

const selectors = {
  all,
  find
};

export default selectors;
