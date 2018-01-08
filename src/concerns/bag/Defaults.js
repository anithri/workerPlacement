import PropTypes from "prop-types";

import { workerIds } from "../workers/Defaults";

function mkPool(val) {
  const workersDefault = {};
  workerIds.forEach(w => {
    workersDefault[w] = val;
  });
  return workersDefault;
}

const defaultCounts = {
  reserve: 15,
  draw: 5
};

const workersDefaultShape = {};
workerIds.forEach(w => {
  workersDefaultShape[w] = PropTypes.number.isRequired;
});
const countShape = PropTypes.shape(workersDefaultShape);

export const shape = PropTypes.shape({
  draw: countShape,
  reserve: countShape,
  projects: PropTypes.objectOf(countShape),
  dead: countShape
});

const defaultBag = {
  draw: mkPool(defaultCounts.draw),
  reserve: mkPool(defaultCounts.reserve),
  dead: mkPool(0),
  projects: {
    default: mkPool(0)
  }
};

export default defaultBag;
