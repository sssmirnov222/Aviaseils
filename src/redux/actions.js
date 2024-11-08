import { type } from '@testing-library/user-event/dist/type';
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

export function cheapTicket() {
  return {
    type: CHEAP,
  };
}

export function fastTicket() {
  return {
    type: FAST,
  };
}

export function optimalTicket() {
  return {
    type: OPTIMAL,
  };
}

export function allTicket() {
  return {
    type: ALL,
  };
}

export function noTransferTicket() {
  return {
    type: NO_TRANSFER,
  };
}

export function oneTransferTicket() {
  return {
    type: ONE_TRANSFER,
  };
}

export function twoTransferTicket() {
  return {
    type: TWO_TRANSFER,
  };
}

export function threeTransferTicket() {
  return {
    type: THREE_TRANSFER,
  };
}

export function ticketLoad() {
  return async (dispatch) => {
    const search = await fetch('https://aviasales-test-api.kata.academy/search');
    const searchId = await search.json();

    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId.searchId}`);
    const jsonData = await response.json();
    dispatch({
      type: TICKET_LOAD,
      data: jsonData.tickets,
    });
  };
}
