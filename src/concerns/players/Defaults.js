import _shuffle from 'lodash/shuffle';

import defaultWorkers from '../workers/Defaults';

const workers = _shuffle(Object.values(defaultWorkers.all)).map(w => w.id);

const combos = workers.map(skip => workers.filter(w => w != skip));

const defaultValues = {
  playerOne: {
    name: "Player One",
    id: "playerOne",
    theme: "playerOne",
    spheres: combos[0],
    score: 15,
  },
  playerTwo: {
    name: "Player Two",
    id: "playerTwo",
    theme: "playerTwo",
    spheres: combos[1],
    score: 15,
  },
  playerThree: {
    name: "Player Three",
    id: "playerThree",
    theme: "playerThree",
    spheres: combos[2],
    score: 15,
  },
  playerFour: {
    name:  "Player Four",
    id: "playerFour",
    theme: "playerFour",
    spheres: combos[3],
    score: 15,
  }
};

export const playerIds = Object.keys(defaultValues);

export default defaultValues;
