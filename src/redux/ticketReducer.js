import { TICKET_LOAD } from './types';

const initialState = {
  ticket: [],
};

const ticketReducer = (state = initialState, action) => {
  console.log('ticketAction >', action.data);

  switch (action.type) {
    case TICKET_LOAD:
      return {
        ticket: action.data,
      };

    default:
  }
  return state;
};

export default ticketReducer;
