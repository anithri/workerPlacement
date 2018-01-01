import defaultPlayers from "store/defaults/players";
export default function app(players = defaultPlayers, action) {
  return players;
}
