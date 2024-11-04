import { CHEAP, FAST, OPTIMAL, ALL, NO_TRANSFER, ONE_TRANSFER, TWO_TRANSFER, THREE_TRANSFER } from './types';

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
