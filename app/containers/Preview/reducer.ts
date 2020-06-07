/*
 *
 * Preview reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  quantityHistory: [],
  priceHistory: [],
  isLoading: false,
};

function previewReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.GET_PRICE_HISTORY_ACTION:
      return {
        quantityHistory: state.quantityHistory,
        priceHistory: state.priceHistory,
        isLoading: true,
      };
    case ActionTypes.GET_PRICE_HISTORY_ACTION_SUCCESS:
      return {
        quantityHistory: state.quantityHistory,
        priceHistory: action.payload,
        isLoading: false,
      };
    case ActionTypes.GET_PRICE_HISTORY_ACTION_FAILED:
      return {
        quantityHistory: [],
        priceHistory: [],
        isLoading: false,
      };
    case ActionTypes.GET_QUANTITY_HISTORY_ACTION:
      return {
        quantityHistory: state.quantityHistory,
        priceHistory: state.priceHistory,
        isLoading: true,
      };
    case ActionTypes.GET_QUANTITY_HISTORY_SUCCESS:
      return {
        quantityHistory: action.payload,
        priceHistory: state.priceHistory,
        isLoading: false,
      };
    case ActionTypes.GET_QUANTITY_HISTORY_FAILED:
      return {
        quantityHistory: [],
        priceHistory: [],
        isLoading: false,
      };

    default:
      return state;
  }
}

export default previewReducer;
