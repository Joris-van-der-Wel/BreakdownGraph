import { combineReducers } from 'redux';
import EventReducer from './event_input_reducer';
import ExpandEvent from './toggle_event_reducer';
import GlobalsReducer from './global_reducer';
import ClickEvent from './click_event_reducer';

const rootReducer = combineReducers({
  input: EventReducer,
  expandedEvents: ExpandEvent,
  globals: GlobalsReducer,
  activeEvent: ClickEvent
});

export default rootReducer;
