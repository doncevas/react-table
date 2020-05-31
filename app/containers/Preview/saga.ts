import { call, put, takeLatest } from 'redux-saga/effects';

import ActionTypes from './constants';
import { setPriceActionFailed, setQuantityActionFailed } from './actions';
import { getProductsAction } from '../Products/actions';
import { setPrice, setQuantity } from '../../api/history';

export function* setProductPrice(action) {
  try {
    console.log(action);

    const result = yield call(setPrice, action.payload);
    if (result) {
      yield put(getProductsAction());
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
    }
  } catch (err) {
    yield put(setQuantityActionFailed(err));
  }
}

export function* previewSaga() {
  yield takeLatest(ActionTypes.SET_PRICE_ACTION, setProductPrice);
  yield takeLatest(ActionTypes.SET_QUANTITY_ACTION, setProductQuantity);
}

export default previewSaga;
