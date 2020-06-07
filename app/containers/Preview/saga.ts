import { call, put, takeLatest } from 'redux-saga/effects';

import ActionTypes from './constants';
import {
  setPriceActionFailed,
  setQuantityActionFailed,
  getQuantitiesActionSuccess,
  getQuantitiesActionFailed,
  getPriceActionFailed,
  getPriceActionSuccess,
} from './actions';
import { getProductsAction } from '../Products/actions';
import {
  setPrice,
  setQuantity,
  getQuantityHistory,
  getPriceHistory,
} from '../../api/history';

export function* setProductPrice(action) {
  try {
    const result = yield call(setPrice, action.payload);
    if (result) {
      yield put(getProductsAction());
      yield put({ type: ActionTypes.GET_QUANTITY_HISTORY_ACTION });
    }
  } catch (err) {
    yield put(setPriceActionFailed(err));
  }
}

export function* setProductQuantity(action) {
  try {
    const result = yield call(setQuantity, action.payload);
    if (result) {
      yield put(getProductsAction());
      yield put({ type: ActionTypes.GET_PRICE_HISTORY_ACTION });
    }
  } catch (err) {
    yield put(setQuantityActionFailed(err));
  }
}

export function* getProductQuantityHistory() {
  try {
    const result = yield call(getQuantityHistory);
    console.log('quantity updated');

    yield put(getQuantitiesActionSuccess(result));
  } catch (err) {
    yield put(getPriceActionFailed(err));
  }
}

export function* getProductPriceHistory() {
  try {
    const result = yield call(getPriceHistory);
    yield put(getPriceActionSuccess(result));
  } catch (err) {
    yield put(getQuantitiesActionFailed(err));
  }
}

export function* previewSaga() {
  yield takeLatest(ActionTypes.SET_PRICE_ACTION, setProductPrice);
  yield takeLatest(ActionTypes.SET_QUANTITY_ACTION, setProductQuantity);
  yield takeLatest(
    ActionTypes.GET_QUANTITY_HISTORY_ACTION,
    getProductQuantityHistory,
  );
  yield takeLatest(
    ActionTypes.GET_PRICE_HISTORY_ACTION,
    getProductPriceHistory,
  );
}

export default previewSaga;
