import { CHEAP, FAST, OPTIMAL } from './types';

const initialState = {
  ticket: [],
};

const sortReducer = (state = initialState, action) => {
  console.log('sortAction >', action);

  switch (action.type) {
    case CHEAP:
      return {
        ticket: state,
      };

    case FAST:
      return {
        ticket: state,
      };

    case OPTIMAL:
      return {
        ticket: state,
      };

    default:
  }
  return state;
};

export default sortReducer;
