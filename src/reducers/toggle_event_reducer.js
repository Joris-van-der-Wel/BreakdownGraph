export default function(state = new Set(), action) {
  const newState = new Set(state);

  switch (action.type) {
  case 'EVENT_EXPAND': {
    const id = action.payload;
    if (newState.has(id)) {
      newState.delete(id);
    } else {
      newState.add(id);
    }
    break;
  }
  default:
  }

  return newState;
}
