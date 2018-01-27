import PropTypes from "prop-types";

export const shape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requirements: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
});

const defaultCards = {
  "card1": {"id": "card1", "name": "Test Card #1", "workers": ["purple", "red"]},
  "card2": {"id": "card2", "name": "Test Card #2", "workers": ["red", "purple"]},
  "card3": {"id": "card3", "name": "Test Card #3", "workers": ["green", "red"]},
  "card4": {"id": "card4", "name": "Test Card #4", "workers": ["red", "green"]},
  "card5": {"id": "card5", "name": "Test Card #5", "workers": ["blue", "red"]},
  "card6": {"id": "card6", "name": "Test Card #6", "workers": ["red", "blue"]},
  "card7": {"id": "card7", "name": "Test Card #7", "workers": ["red", "purple"]},
  "card8": {"id": "card8", "name": "Test Card #8", "workers": ["purple", "red"]},
  "card9": {"id": "card9", "name": "Test Card #9", "workers": ["green", "purple"]},
  "card10": {"id": "card10", "name": "Test Card #10", "workers": ["purple", "green"]},
  "card11": {"id": "card11", "name": "Test Card #11", "workers": ["blue", "purple"]},
  "card12": {"id": "card12", "name": "Test Card #12", "workers": ["purple", "blue"]},
  "card13": {"id": "card13", "name": "Test Card #13", "workers": ["red", "green"]},
  "card14": {"id": "card14", "name": "Test Card #14", "workers": ["green", "red"]},
  "card15": {"id": "card15", "name": "Test Card #15", "workers": ["purple", "green"]},
  "card16": {"id": "card16", "name": "Test Card #16", "workers": ["green", "purple"]},
  "card17": {"id": "card17", "name": "Test Card #17", "workers": ["blue", "green"]},
  "card18": {"id": "card18", "name": "Test Card #18", "workers": ["green", "blue"]},
  "card19": {"id": "card19", "name": "Test Card #19", "workers": ["red", "blue"]},
  "card20": {"id": "card20", "name": "Test Card #20", "workers": ["blue", "red"]},
  "card21": {"id": "card21", "name": "Test Card #21", "workers": ["purple", "blue"]},
  "card22": {"id": "card22", "name": "Test Card #22", "workers": ["blue", "purple"]},
  "card23": {"id": "card23", "name": "Test Card #23", "workers": ["green", "blue"]},
  "card24": {"id": "card24", "name": "Test Card #24", "workers": ["blue", "green"]},
  "card25": {"id": "card25", "name": "Test Card #25", "workers": ["red", "purple", "purple"]},
  "card26": {"id": "card26", "name": "Test Card #26", "workers": ["red", "purple", "green"]},
  "card27": {"id": "card27", "name": "Test Card #27", "workers": ["red", "purple", "blue"]},
  "card28": {"id": "card28", "name": "Test Card #28", "workers": ["red", "green", "purple"]},
  "card29": {
    "id": "card29",
    "name": "Test Card #29",
    "workers": ["red", "green", "green"]
  },
  "card30": {
    "id": "card30",
    "name": "Test Card #30",
    "workers": ["red", "green", "blue"]
  },
  "card31": {"id": "card31", "name": "Test Card #31", "workers": ["red", "blue", "purple"]},
  "card32": {
    "id": "card32",
    "name": "Test Card #32",
    "workers": ["red", "blue", "green"]
  },
  "card33": {"id": "card33", "name": "Test Card #33", "workers": ["red", "blue", "blue"]},
  "card34": {"id": "card34", "name": "Test Card #34", "workers": ["purple", "red", "red"]},
  "card35": {"id": "card35", "name": "Test Card #35", "workers": ["purple", "red", "green"]},
  "card36": {"id": "card36", "name": "Test Card #36", "workers": ["purple", "red", "blue"]},
  "card37": {"id": "card37", "name": "Test Card #37", "workers": ["purple", "green", "red"]},
  "card38": {
    "id": "card38",
    "name": "Test Card #38",
    "workers": ["purple", "green", "green"]
  },
  "card39": {
    "id": "card39",
    "name": "Test Card #39",
    "workers": ["purple", "green", "blue"]
  },
  "card40": {"id": "card40", "name": "Test Card #40", "workers": ["purple", "blue", "red"]},
  "card41": {
    "id": "card41",
    "name": "Test Card #41",
    "workers": ["purple", "blue", "green"]
  },
  "card42": {"id": "card42", "name": "Test Card #42", "workers": ["purple", "blue", "blue"]},
  "card43": {"id": "card43", "name": "Test Card #43", "workers": ["green", "red", "red"]},
  "card44": {"id": "card44", "name": "Test Card #44", "workers": ["green", "red", "purple"]},
  "card45": {
    "id": "card45",
    "name": "Test Card #45",
    "workers": ["green", "red", "blue"]
  },
  "card46": {"id": "card46", "name": "Test Card #46", "workers": ["green", "purple", "red"]},
  "card47": {
    "id": "card47",
    "name": "Test Card #47",
    "workers": ["green", "purple", "purple"]
  },
  "card48": {
    "id": "card48",
    "name": "Test Card #48",
    "workers": ["green", "purple", "blue"]
  },
  "card49": {
    "id": "card49",
    "name": "Test Card #49",
    "workers": ["green", "blue", "red"]
  },
  "card50": {
    "id": "card50",
    "name": "Test Card #50",
    "workers": ["green", "blue", "purple"]
  },
  "card51": {
    "id": "card51",
    "name": "Test Card #51",
    "workers": ["green", "blue", "blue"]
  },
  "card52": {"id": "card52", "name": "Test Card #52", "workers": ["blue", "red", "red"]},
  "card53": {"id": "card53", "name": "Test Card #53", "workers": ["blue", "red", "purple"]},
  "card54": {
    "id": "card54",
    "name": "Test Card #54",
    "workers": ["blue", "red", "green"]
  },
  "card55": {"id": "card55", "name": "Test Card #55", "workers": ["blue", "purple", "red"]},
  "card56": {"id": "card56", "name": "Test Card #56", "workers": ["blue", "purple", "purple"]},
  "card57": {
    "id": "card57",
    "name": "Test Card #57",
    "workers": ["blue", "purple", "green"]
  },
  "card58": {
    "id": "card58",
    "name": "Test Card #58",
    "workers": ["blue", "green", "red"]
  },
  "card59": {
    "id": "card59",
    "name": "Test Card #59",
    "workers": ["blue", "green", "purple"]
  },
  "card60": {
    "id": "card60",
    "name": "Test Card #60",
    "workers": ["blue", "green", "green"]
  }
};

export const cardIds = Object.keys(defaultCards);

export default defaultCards;
