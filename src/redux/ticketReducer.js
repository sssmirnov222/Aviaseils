import { TICKET_LOAD } from './types';

const initialState = {
  ticket: [],
};

const ticketReducer = (state = initialState, action) => {
  console.log('ticketAction >', action.type);
  console.log('ticketAction >', action.data);

  switch (action.type) {
    case TICKET_LOAD:
      return {
        ticket: action.data,
        loading: action.loading,
        searchId: action.searchId,
      };

    default:
  }
  return state;
};

export default ticketReducer;
