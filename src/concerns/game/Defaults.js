import PropTypes from "prop-types";
import {playerIds} from "../players/Defaults";

export const shape = PropTypes.shape({
  phase: PropTypes.number.required,
  order: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
});

const defaultGame = {
  round: 0,
  order: playerIds
};

export default defaultGame;
