export default function(state = null, action) {
  let newState = state;

  switch (action.type) {
  case 'ACTIVE_TRANS': {
    const id = action.payload;
    if (newState === id) {
      newState = null;
    } else {
      newState = id;
    }
    break;
  }
  default:
  }

  return newState;
}
