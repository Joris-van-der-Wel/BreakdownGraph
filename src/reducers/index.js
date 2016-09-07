import { combineReducers } from 'redux';
import EventReducer from './event_input_reducer';
import ExpandEvent from './toggle_event_reducer';
import GlobalsReducer from './global_reducer';

const rootReducer = combineReducers({
  input: EventReducer,
  expandedEvents: ExpandEvent,
  globals: GlobalsReducer
});

export default rootReducer;
