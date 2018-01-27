import PropTypes from 'prop-types';

export const workerShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  summaries: PropTypes.shape({
    draw: PropTypes.number.isRequired,
    reserve: PropTypes.number.isRequired,
    dead: PropTypes.number.isRequired,
    working: PropTypes.number.isRequired
  })
});

const summary = {
  draw: 0,
  reserve: 0,
  dead: 0,
  active: 0
};

export const shape = PropTypes.shape(PropTypes.objectOf(workerShape.isRequired));

const defaultValue = {
  all: {
    Red: {
      id: "Red",
      name: "Red",
      theme: "workerRed",
      summary: {...summary}
    },
    Blue: {
      id: "Blue",
      name: "Blue",
      theme: "workerBlue",
      summary: {...summary}
    },
    Green: {
      id: "Green",
      name: "Green",
      theme: "workerGreen",
      summary: {...summary}
    },
    Purple: {
      id: "Purple",
      name: "Purple",
      theme: "workerPurple",
      summary: {...summary}
    }
  }
};

export const workerIds = Object.keys(defaultValue);

export default defaultValue;
