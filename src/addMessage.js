
export default function(app, payload) {
  const newMessage = {
    id: payload.id || Math.random().toString(36).substr(2, 8),
    body: payload.body
  };
  const all = [...(app.all), newMessage];
  return {
    ...app,
    all
  };
}
