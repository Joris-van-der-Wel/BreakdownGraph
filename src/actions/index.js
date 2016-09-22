export function expandEvent(eventExp) {
  return {
    type: 'EVENT_EXPAND',
    payload: eventExp
  };
}

export function clickEvent(eventActive) {
  return {
    type: 'EVENT_CLICK',
    payload: eventActive
  };
}

export function activeTransaction(transaction) {
  return {
    type: 'ACTIVE_TRANS',
    payload: transaction
  }
}
// export function scrollLeftValue(left) {
//   return {
//     type: 'SCROLL_LEFT',
//     payload: left
//   };
// }
