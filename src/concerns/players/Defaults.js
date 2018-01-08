import _shuffle from 'lodash/shuffle';

import defaultWorkers from '../workers/Defaults';

const workers = _shuffle(Object.values(defaultWorkers)).map(w => w.id);

const combos = workers.map(skip => workers.filter(w => w != skip));

const defaultValues = {
  One: {
    name: "Player One",
    id: "One",
    spheres: combos[0],
    score: 15,
  },
  Two: {
    name: "Player Two",
    id: "Two",
    spheres: combos[1],
    score: 15,
  },
  Three: {
    name: "Player Three",
    id: "Three",
    spheres: combos[2],
    score: 15,
  },
  Four: {
    name:  "Player Four",
    id: "Four",
    spheres: combos[3],
    score: 15,
  }
};

export const playerIds = Object.keys(defaultValues);

export default defaultValues;
