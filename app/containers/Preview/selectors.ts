import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the preview state domain
 */

const selectPreviewDomain = (state: ApplicationRootState) =>
  state.preview || initialState;

const selectQuantityHistory = () =>
  createSelector(
    selectPreviewDomain,
    subState => subState.quantityHistory || [],
  );

const selectPriceHistory = () =>
  createSelector(selectPreviewDomain, subState => subState.priceHistory || []);

const makeSelectPreview = () =>
  createSelector(selectPreviewDomain, subState => subState);

export default makeSelectPreview;
export { selectPreviewDomain, selectQuantityHistory, selectPriceHistory };
