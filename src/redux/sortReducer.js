import { CHEAP, FAST, OPTIMAL, ALL, NO_TRANSFER, ONE_TRANSFER, TWO_TRANSFER, THREE_TRANSFER } from './types';

const initialState = {
  ticket: [],
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHEAP:
      return {
        ticket: action.data,
      };

    case FAST:
      return {
        ticket: action.data,
      };

    case OPTIMAL:
      return {
        ticket: action.data,
      };

    case ALL:
      return {
        ticket: action.data,
      };

    case NO_TRANSFER:
      return {
        ticket: action.data,
      };

    case ONE_TRANSFER:
      return {
        ticket: action.data,
      };

    case TWO_TRANSFER:
      return {
        ticket: action.data,
      };

    case THREE_TRANSFER:
      return {
        ticket: action.data,
      };

    default:
      return {
        ticket: action.data,
        loading: action.loading,
        searchId: action.searchId,
      };
  }
};

export default sortReducer;
