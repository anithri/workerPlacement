export default function start(app, payload) {
  return {
    ...app,
    phase: 0,
    ...payload
  }
}
