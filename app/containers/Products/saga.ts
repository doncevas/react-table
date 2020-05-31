import { call, put, takeLatest } from 'redux-saga/effects';

import ActionTypes from './constants';
import {
  getProductsActionFailed,
  getProductsActionSuccess,
  removeProductActionFailed,
  createProductActionFailed,
  updateProductActionFailed,
} from './actions';
import { Product } from './product.interface';
import {
  getProducts,
  createProduct,
  removeProduct,
  updateProduct,
} from '../../api/product';

export function* getAllProducts() {
  try {
    const result: Product[] = yield call(getProducts);
    yield put(getProductsActionSuccess(result));
  } catch (err) {
    yield put(getProductsActionFailed(err));
  }
}

export function* addProduct(action) {
  try {
    const result: boolean = yield call(createProduct, action.payload);

    if (result) {
      yield put({
        type: ActionTypes.GET_PRODUCTS_ACTION,
      });
    }
  } catch (err) {
    yield put(createProductActionFailed(err));
  }
}

export function* update(action) {
  try {
    const result: boolean = yield call(updateProduct, action.payload);

    if (result) {
      yield put({
        type: ActionTypes.GET_PRODUCTS_ACTION,
      });
    }
  } catch (err) {
    yield put(updateProductActionFailed(err));
  }
}

export function* removeProductItem(action) {
  try {
    const result: boolean = yield call(removeProduct, action.payload);

    if (result) {
      yield put({
        type: ActionTypes.GET_PRODUCTS_ACTION,
      });
    }
  } catch (err) {
    yield put(removeProductActionFailed(err));
  }
}

export function* productsSaga() {
  yield takeLatest(ActionTypes.GET_PRODUCTS_ACTION, getAllProducts);
  yield takeLatest(ActionTypes.CREATE_PRODUCT_ACTION, addProduct);
  yield takeLatest(ActionTypes.REMOVE_PRODUCT_ACTION, removeProductItem);
  yield takeLatest(ActionTypes.UPDATE_PRODUCT_ACTION, update);
}

export default productsSaga;
