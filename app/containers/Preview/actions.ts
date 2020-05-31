/*
 *
 * Preview actions
 *
 */

import { action } from 'typesafe-actions';

import ActionTypes from './constants';
import { QuantityPayload, PricePayload } from './preview.interface';

export const setQuantityAction = (payload: QuantityPayload) =>
  action(ActionTypes.SET_QUANTITY_ACTION, payload);
export const setQuantityActionSuccess = () =>
  action(ActionTypes.SET_QUANTITY_ACTION_SUCCESS);
export const setQuantityActionFailed = (error: Error) =>
  action(ActionTypes.SET_QUANTITY_ACTION_FAILED, error);

export const setPriceAction = (payload: PricePayload) =>
  action(ActionTypes.SET_PRICE_ACTION, payload);
export const setPriceActionSuccess = () =>
  action(ActionTypes.SET_PRICE_ACTION_SUCCESS);
export const setPriceActionFailed = (error: Error) =>
  action(ActionTypes.SET_PRICE_ACTION_FAILED, error);
