import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectProductsDomain = (state: ApplicationRootState) =>
  state.products || initialState;

const selectProducts = () =>
  createSelector(selectProductsDomain, subState => subState.products || []);

const selectIsLoadingProducts = () =>
  createSelector(selectProductsDomain, subState => subState.isLoading || false);

export { selectProducts, selectIsLoadingProducts };
