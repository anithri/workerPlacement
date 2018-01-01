import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

export const shape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
});

export const all = state => state.messages.all;
export const showing = (state) => state.messages.showing;

const current = createSelector([all, showing], (messages,show) => {
  console.log("here?", messages, show)
  return messages.slice(Math.max(messages.length - show, messages.length))
});

export const find = (messageId, state) => all(state)[messageId];

const selectors = {
  shape,
  all,
  showing,
  current,
  find
};

export default selectors;
