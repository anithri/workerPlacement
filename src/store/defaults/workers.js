const defaultCounts = {
  total: 20,
  reserve: 15,
  bag: 5,
  working: 0
};

const defaultValue = {
  kgb: {...defaultCounts, name: "K.G.B.", id: "kgb"},
  party: {...defaultCounts, name: "Party", id: "party"},
  politburo: {...defaultCounts, name: "Politburo", id: "politburo"},
  proletariat: {...defaultCounts, name: "Proletariat", id: "proletariat"},
  redArmy: {...defaultCounts, name: "Red Army", id: "redArmy"}
};

export default defaultValue;
