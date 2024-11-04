import { ALL, NO_TRANSFER, ONE_TRANSFER, TWO_TRANSFER, THREE_TRANSFER } from './types';

const initialState = {
  ticket: [],
};

export const checkboxReducer = (state = initialState, action) => {
  console.log('chekAction >', action);

  switch (action.type) {
    case ALL:
      return {
        ticket: state,
      };

    case NO_TRANSFER:
      return {
        ticket: state,
      };

    case ONE_TRANSFER:
      return {
        ticket: state,
      };

    case TWO_TRANSFER:
      return {
        ticket: state,
      };

    case THREE_TRANSFER:
      return {
        ticket: state,
      };

    default:
  }
  return state;
};
