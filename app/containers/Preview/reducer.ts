/*
 *
 * Preview reducer
 *
 */

// import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  default: null,
};

function previewReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    default:
      return state;
  }
}

export default previewReducer;
