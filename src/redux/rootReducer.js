import sortReducer from './sortReducer';

import ticketReducer from './ticketReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  sortReducer,
  ticketReducer,
});

export default rootReducer;
