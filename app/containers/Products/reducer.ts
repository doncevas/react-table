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
      };
    case ActionTypes.GET_PRODUCTS_ACTION_SUCCESS:
      return {
        products: action.payload,
        isLoading: false,
      };
    case ActionTypes.GET_PRODUCTS_ACTION_FAILED:
      return {
        products: [],
        isLoading: false,
      };
    default:
      return state;
  }
}

export default productsReducer;
