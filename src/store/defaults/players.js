import _shuffle from 'lodash/shuffle';

import defaultWorkers from './workers';

const workers = _shuffle(Object.keys(defaultWorkers)).splice(0,4);

const combos = workers.map(skip => workers.filter(w => w != skip));

const defaultValues = {
  One: {
    name: "Player One",
    id: "One",
    spheres: combos[0]
  },
  Two: {
    name: "Player Two",
    id: "Two",
    spheres: combos[1]
  },
  Three: {
    name: "Player Three",
    id: "Three",
    spheres: combos[2]
  },
  Four: {
    name:  "Player Four",
    id: "Four",
    spheres: combos[3]
  }
};

export default defaultValues;
