import actions from 'redux-auto';

export default function action(game, payload) {
  // change the current Player
  // fill projects
  // draw workers

  return game;
}
action.chain = (orig, payload) => actions.messages.add({body: "Game Started!"});
