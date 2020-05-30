/*
 *
 * Products constants
 *
 */

enum ActionTypes {
  CREATE_PRODUCT_ACTION = 'app/Products/CREATE_PRODUCT_ACTION',
  CREATE_PRODUCT_ACTION_SUCCESS = 'app/Products/CREATE_PRODUCT_ACTION_SUCCESS',
  CREATE_PRODUCT_ACTION_FAILED = 'app/Products/CREATE_PRODUCT_ACTION_FAILED',

  GET_PRODUCTS_ACTION = 'app/Products/GET_PRODUCTS_ACTION',
  GET_PRODUCTS_ACTION_SUCCESS = 'app/Products/GET_PRODUCTS_ACTION_SUCCESS',
  GET_PRODUCTS_ACTION_FAILED = 'app/Products/GET_PRODUCTS_ACTION_FAILED',

  REMOVE_PRODUCT_ACTION = 'app/Products/REMOVE_PRODUCT_ACTION',
  REMOVE_PRODUCT_ACTION_SUCCESS = 'app/Products/REMOVE_PRODUCT_ACTION_SUCCESS',
  REMOVE_PRODUCT_ACTION_FAILED = 'app/Products/REMOVE_PRODUCT_ACTION_FAILED',
}

export default ActionTypes;
