import PropTypes from "prop-types";

export const shape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requirements: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
});

const defaultCards = {
  "card1": {"id": "card1", "name": "Test Card #1", "workers": ["party", "kgb"]},
  "card2": {"id": "card2", "name": "Test Card #2", "workers": ["kgb", "party"]},
  "card3": {"id": "card3", "name": "Test Card #3", "workers": ["proletariat", "kgb"]},
  "card4": {"id": "card4", "name": "Test Card #4", "workers": ["kgb", "proletariat"]},
  "card5": {"id": "card5", "name": "Test Card #5", "workers": ["redArmy", "kgb"]},
  "card6": {"id": "card6", "name": "Test Card #6", "workers": ["kgb", "redArmy"]},
  "card7": {"id": "card7", "name": "Test Card #7", "workers": ["kgb", "party"]},
  "card8": {"id": "card8", "name": "Test Card #8", "workers": ["party", "kgb"]},
  "card9": {"id": "card9", "name": "Test Card #9", "workers": ["proletariat", "party"]},
  "card10": {"id": "card10", "name": "Test Card #10", "workers": ["party", "proletariat"]},
  "card11": {"id": "card11", "name": "Test Card #11", "workers": ["redArmy", "party"]},
  "card12": {"id": "card12", "name": "Test Card #12", "workers": ["party", "redArmy"]},
  "card13": {"id": "card13", "name": "Test Card #13", "workers": ["kgb", "proletariat"]},
  "card14": {"id": "card14", "name": "Test Card #14", "workers": ["proletariat", "kgb"]},
  "card15": {"id": "card15", "name": "Test Card #15", "workers": ["party", "proletariat"]},
  "card16": {"id": "card16", "name": "Test Card #16", "workers": ["proletariat", "party"]},
  "card17": {"id": "card17", "name": "Test Card #17", "workers": ["redArmy", "proletariat"]},
  "card18": {"id": "card18", "name": "Test Card #18", "workers": ["proletariat", "redArmy"]},
  "card19": {"id": "card19", "name": "Test Card #19", "workers": ["kgb", "redArmy"]},
  "card20": {"id": "card20", "name": "Test Card #20", "workers": ["redArmy", "kgb"]},
  "card21": {"id": "card21", "name": "Test Card #21", "workers": ["party", "redArmy"]},
  "card22": {"id": "card22", "name": "Test Card #22", "workers": ["redArmy", "party"]},
  "card23": {"id": "card23", "name": "Test Card #23", "workers": ["proletariat", "redArmy"]},
  "card24": {"id": "card24", "name": "Test Card #24", "workers": ["redArmy", "proletariat"]},
  "card25": {"id": "card25", "name": "Test Card #25", "workers": ["kgb", "party", "party"]},
  "card26": {"id": "card26", "name": "Test Card #26", "workers": ["kgb", "party", "proletariat"]},
  "card27": {"id": "card27", "name": "Test Card #27", "workers": ["kgb", "party", "redArmy"]},
  "card28": {"id": "card28", "name": "Test Card #28", "workers": ["kgb", "proletariat", "party"]},
  "card29": {
    "id": "card29",
    "name": "Test Card #29",
    "workers": ["kgb", "proletariat", "proletariat"]
  },
  "card30": {
    "id": "card30",
    "name": "Test Card #30",
    "workers": ["kgb", "proletariat", "redArmy"]
  },
  "card31": {"id": "card31", "name": "Test Card #31", "workers": ["kgb", "redArmy", "party"]},
  "card32": {
    "id": "card32",
    "name": "Test Card #32",
    "workers": ["kgb", "redArmy", "proletariat"]
  },
  "card33": {"id": "card33", "name": "Test Card #33", "workers": ["kgb", "redArmy", "redArmy"]},
  "card34": {"id": "card34", "name": "Test Card #34", "workers": ["party", "kgb", "kgb"]},
  "card35": {"id": "card35", "name": "Test Card #35", "workers": ["party", "kgb", "proletariat"]},
  "card36": {"id": "card36", "name": "Test Card #36", "workers": ["party", "kgb", "redArmy"]},
  "card37": {"id": "card37", "name": "Test Card #37", "workers": ["party", "proletariat", "kgb"]},
  "card38": {
    "id": "card38",
    "name": "Test Card #38",
    "workers": ["party", "proletariat", "proletariat"]
  },
  "card39": {
    "id": "card39",
    "name": "Test Card #39",
    "workers": ["party", "proletariat", "redArmy"]
  },
  "card40": {"id": "card40", "name": "Test Card #40", "workers": ["party", "redArmy", "kgb"]},
  "card41": {
    "id": "card41",
    "name": "Test Card #41",
    "workers": ["party", "redArmy", "proletariat"]
  },
  "card42": {"id": "card42", "name": "Test Card #42", "workers": ["party", "redArmy", "redArmy"]},
  "card43": {"id": "card43", "name": "Test Card #43", "workers": ["proletariat", "kgb", "kgb"]},
  "card44": {"id": "card44", "name": "Test Card #44", "workers": ["proletariat", "kgb", "party"]},
  "card45": {
    "id": "card45",
    "name": "Test Card #45",
    "workers": ["proletariat", "kgb", "redArmy"]
  },
  "card46": {"id": "card46", "name": "Test Card #46", "workers": ["proletariat", "party", "kgb"]},
  "card47": {
    "id": "card47",
    "name": "Test Card #47",
    "workers": ["proletariat", "party", "party"]
  },
  "card48": {
    "id": "card48",
    "name": "Test Card #48",
    "workers": ["proletariat", "party", "redArmy"]
  },
  "card49": {
    "id": "card49",
    "name": "Test Card #49",
    "workers": ["proletariat", "redArmy", "kgb"]
  },
  "card50": {
    "id": "card50",
    "name": "Test Card #50",
    "workers": ["proletariat", "redArmy", "party"]
  },
  "card51": {
    "id": "card51",
    "name": "Test Card #51",
    "workers": ["proletariat", "redArmy", "redArmy"]
  },
  "card52": {"id": "card52", "name": "Test Card #52", "workers": ["redArmy", "kgb", "kgb"]},
  "card53": {"id": "card53", "name": "Test Card #53", "workers": ["redArmy", "kgb", "party"]},
  "card54": {
    "id": "card54",
    "name": "Test Card #54",
    "workers": ["redArmy", "kgb", "proletariat"]
  },
  "card55": {"id": "card55", "name": "Test Card #55", "workers": ["redArmy", "party", "kgb"]},
  "card56": {"id": "card56", "name": "Test Card #56", "workers": ["redArmy", "party", "party"]},
  "card57": {
    "id": "card57",
    "name": "Test Card #57",
    "workers": ["redArmy", "party", "proletariat"]
  },
  "card58": {
    "id": "card58",
    "name": "Test Card #58",
    "workers": ["redArmy", "proletariat", "kgb"]
  },
  "card59": {
    "id": "card59",
    "name": "Test Card #59",
    "workers": ["redArmy", "proletariat", "party"]
  },
  "card60": {
    "id": "card60",
    "name": "Test Card #60",
    "workers": ["redArmy", "proletariat", "proletariat"]
  }
};

export const cardIds = Object.keys(defaultCards);

export default defaultCards;
