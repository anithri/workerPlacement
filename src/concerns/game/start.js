import actions from 'redux-auto';

export default function action(game, payload) {
  console.log('game/start/action', game, payload);
  const {deck, bag} = payload;
  return Promise.resolve({
    ...game,
    phase: 0,
    deck,
    bag
  });
}
action.chain = (orig, payload) => actions.messages.add({body: "Game Started!"});