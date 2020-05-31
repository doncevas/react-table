import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the layout state domain
 */

const selectLayoutDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Layout
 */

const makeSelectLayout = () =>
  createSelector(selectLayoutDomain, substate => substate);

export default makeSelectLayout;
export { selectLayoutDomain };
