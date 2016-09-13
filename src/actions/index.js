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
