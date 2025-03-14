import {
  CHEAP,
  FAST,
  OPTIMAL,
  ALL,
  NO_TRANSFER,
  ONE_TRANSFER,
  TWO_TRANSFER,
  THREE_TRANSFER,
  TICKET_LOAD,
} from './types';
let jsonData = [];
let searchId = '';

try {
  let search = await fetch('https://aviasales-test/search');
  searchId = await search.json();
  const response = await fetch(`https://aviasales-test/tickets?searchId=${searchId.searchId}`);
  jsonData = await response.json();
} catch (e) {
  console.log(e);
}

export function cheapTicket() {
  return async (dispatch) => {
    try {
      dispatch({
        type: CHEAP,
        data: [...jsonData.tickets].sort((a, b) => parseFloat(a.price) - parseFloat(b.price)),
      });
    } catch (e) {
      console.log('Error', e);
    }
  };
}

export function fastTicket() {
  return async (dispatch) => {
    try {
      dispatch({
        type: FAST,
        data: [...jsonData.tickets].sort(
          (a, b) => parseFloat(a.segments[0].duration) - parseFloat(b.segments[0].duration)
        ),
      });
    } catch (e) {
      console.log('Error', e);
    }
  };
}

export function optimalTicket() {
  return {
    type: OPTIMAL,
  };
}

export function allTicket(allTick, noTransfertick, oneTransferTick, twoTransferTick, threeTransferTick) {
  return async (dispatch) => {
    try {
      dispatch({
        type: ALL,
        data: jsonData.tickets,
      });
    } catch (e) {
      console.log('Error', e);
    }
  };
}

export function noTransferTicket(noTransfertick) {
  return async (dispatch) => {
    try {
      dispatch({
        type: NO_TRANSFER,
        data: noTransfertick
          ? [...jsonData.tickets].filter((a) => a.segments[0].stops.length !== 0)
          : [...jsonData.tickets].filter((a) => a.segments[0].stops.length === 0 && a.segments[1].stops.length === 0),
      });
    } catch (e) {
      console.log('Error', e);
    }
  };
}

export function oneTransferTicket(oneTransferTick) {
  return async (dispatch) => {
    try {
      dispatch({
        type: ONE_TRANSFER,
        data: oneTransferTick
          ? [...jsonData.tickets].filter((a) => a.segments[0].stops.length !== 1)
          : [...jsonData.tickets].filter((a) => a.segments[0].stops.length === 1 && a.segments[1].stops.length === 1),
      });
    } catch (e) {
      console.log('Error', e);
    }
  };
}

export function twoTransferTicket(twoTransferTick) {
  return async (dispatch) => {
    try {
      dispatch({
        type: TWO_TRANSFER,
        data: twoTransferTick
          ? [...jsonData.tickets].filter((a) => a.segments[0].stops.length !== 2)
          : [...jsonData.tickets].filter((a) => a.segments[0].stops.length === 2 && a.segments[1].stops.length === 2),
      });
    } catch (e) {
      console.log('Error', e);
    }
  };
}

export function threeTransferTicket(threeTransferTick) {
  return async (dispatch) => {
    try {
      dispatch({
        type: THREE_TRANSFER,
        data: threeTransferTick
          ? [...jsonData.tickets].filter((a) => a.segments[0].stops.length !== 3)
          : [...jsonData.tickets].filter((a) => a.segments[0].stops.length === 3 && a.segments[1].stops.length === 3),
      });
    } catch (e) {
      console.log('Error', e);
    }
  };
}

export function ticketLoad(allTick, noTransfertick, oneTransferTick, twoTransferTick, threeTransferTick) {
  return async (dispatch) => {
    let loading = true;
    loading = false;

    dispatch({
      type: TICKET_LOAD,
      data: jsonData.tickets,
      loading: loading,
      searchId: searchId,
    });
  };
}
