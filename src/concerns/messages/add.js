import generateId from 'utils/generateId';

export default function(app, payload) {
  const newMessage = {
    id: payload.id || generateId(),
    body: payload.body
  };
  const all = [...app.all, newMessage];
  return {
    ...app,
    all
  }
}
