/*
 *
 * Products reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  products: [],
  isLoading: false,
  error: null,
};

function productsReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS_ACTION:
      return {
        products: state.products,
        isLoading: true,
        error: null,
      };
    case ActionTypes.GET_PRODUCTS_ACTION_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case ActionTypes.GET_PRODUCTS_ACTION_FAILED:
    case ActionTypes.CREATE_PRODUCT_ACTION_FAILED:
    case ActionTypes.REMOVE_PRODUCT_ACTION_FAILED:
    case ActionTypes.UPDATE_PRODUCT_ACTION_FAILED:
      return {
        products: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default productsReducer;
