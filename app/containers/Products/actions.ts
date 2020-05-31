/*
 *
 * Products actions
 *
 */

import { action } from 'typesafe-actions';
import ActionTypes from './constants';
import { Product } from './product.interface';

export const createProductAction = (payload: Product) =>
  action(ActionTypes.CREATE_PRODUCT_ACTION, payload);
export const createProductActionSuccess = () =>
  action(ActionTypes.CREATE_PRODUCT_ACTION_SUCCESS);
export const createProductActionFailed = (error: Error) =>
  action(ActionTypes.CREATE_PRODUCT_ACTION_FAILED, error);

export const updateProductAction = (payload: Product) =>
  action(ActionTypes.UPDATE_PRODUCT_ACTION, payload);
export const updateProductActionSuccess = () =>
  action(ActionTypes.UPDATE_PRODUCT_ACTION_SUCCESS);
export const updateProductActionFailed = (error: Error) =>
  action(ActionTypes.UPDATE_PRODUCT_ACTION_FAILED, error);

export const getProductsAction = () => action(ActionTypes.GET_PRODUCTS_ACTION);
export const getProductsActionSuccess = (payload: Product[]) =>
  action(ActionTypes.GET_PRODUCTS_ACTION_SUCCESS, payload);
export const getProductsActionFailed = (error: Error) =>
  action(ActionTypes.GET_PRODUCTS_ACTION_FAILED, error);

export const removeProductAction = (id: string) =>
  action(ActionTypes.REMOVE_PRODUCT_ACTION, id);
export const removeProductActionSuccess = () =>
  action(ActionTypes.REMOVE_PRODUCT_ACTION_SUCCESS);
export const removeProductActionFailed = (error: Error) =>
  action(ActionTypes.REMOVE_PRODUCT_ACTION_FAILED, error);
