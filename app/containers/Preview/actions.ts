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

export const getPriceAction = () =>
  action(ActionTypes.GET_PRICE_HISTORY_ACTION);
export const getPriceActionSuccess = (payload: PricePayload[]) =>
  action(ActionTypes.GET_PRICE_HISTORY_ACTION_SUCCESS, payload);
export const getPriceActionFailed = (error: Error) =>
  action(ActionTypes.GET_PRICE_HISTORY_ACTION_FAILED, error);

export const getQuantitiesAction = () =>
  action(ActionTypes.GET_QUANTITY_HISTORY_ACTION);
export const getQuantitiesActionSuccess = (payload: QuantityPayload[]) =>
  action(ActionTypes.GET_QUANTITY_HISTORY_SUCCESS, payload);
export const getQuantitiesActionFailed = (error: Error) =>
  action(ActionTypes.GET_QUANTITY_HISTORY_FAILED, error);
