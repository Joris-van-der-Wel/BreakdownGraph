export default function(state = null, action) {
  switch (action.type) {
  case 'EVENT_CLICK': {
    return action.payload;
  }
  default:
  }
  return state;
}
