import sortReducer from './sortReducer';
import { checkboxReducer } from './checkboxReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  sortReducer,
  checkboxReducer,
});

export default rootReducer;
