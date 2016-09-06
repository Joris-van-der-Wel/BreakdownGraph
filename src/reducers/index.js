import { combineReducers } from 'redux';
import EventReducer from './event_input_reducer';

const rootReducer = combineReducers({
  events: EventReducer
});

export default rootReducer;
