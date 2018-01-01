const defaultValues = {
  One: {
    name: "Player One",
    id: "One",
  },
  Two: {
    name: "Player Two",
    id: "Two",
  },
  Three: {
    name: "Player Three",
    id: "Three",
  },
  Four: {
    name:  "Player Four",
    id: "Four",
  }
};

export default function app(app = defaultValues, action) {
  return app;
}
