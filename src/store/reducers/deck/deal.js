export default function (deck, payload) {
  const {cards} = payload;
  const empty = {};
  Object.keys(deck).forEach(k => empty[k] = {});
  return {
    ...empty,
    active: cards.slice(16,0),
    draw: cards.slice(16)
  };
}
