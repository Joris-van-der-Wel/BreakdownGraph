export default function(state = null, action) {
  switch (action.type) {
  case 'SCROLL_LEFT': {
    return action.payload;
  }
  default:
  }
  return state;
}
