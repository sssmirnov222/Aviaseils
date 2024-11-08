import sortReducer from './sortReducer';
import { checkboxReducer } from './checkboxReducer';
import ticketReducer from './ticketReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  sortReducer,
  checkboxReducer,
  ticketReducer,
});

export default rootReducer;
