const defaultCounts = {
  total: 20,
  reserve: 15,
  bag: 5,
  working: 0
};

const defaultValue = {
  kgb: {...defaultCounts, name: "K.G.B.", id: "kgb", theme: "kgb"},
  party: {...defaultCounts, name: "Party", id: "party", theme: "party"},
  politburo: {...defaultCounts, name: "Politburo", id: "politburo", theme: "politburo"},
  proletariat: {...defaultCounts, name: "Proletariat", id: "proletariat", theme: "proletariat"},
  redArmy: {...defaultCounts, name: "Red Army", id: "redArmy", theme: "redArmy"},
};

export default defaultValue;
