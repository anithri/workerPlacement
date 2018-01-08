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
export const shape = PropTypes.shape({
  kgb: workerShape.isRequired,
  party: workerShape.isRequired,
  proletariat: workerShape.isRequired,
  redArmy: workerShape.isRequired
});

const defaultValue = {
  kgb: {
    id: "kgb",
    name: "K.G.B.",
    theme: "kgb",
    summary: {...summary}
  },
  party: {
    id: "party",
    name: "Party",
    theme: "party",
    summary: {...summary}
  },
  proletariat: {
    id: "proletariat",
    name: "Proletariat",
    theme: "proletariat",
    summary: {...summary}
  },
  redArmy: {
    id: "redArmy",
    name: "Red Army",
    theme: "redArmy",
    summary: {...summary}
  }
};

export const workerIds = Object.keys(defaultValue);

export default defaultValue;
