import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the preview state domain
 */

const selectPreviewDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Preview
 */

const makeSelectPreview = () =>
  createSelector(selectPreviewDomain, substate => substate);

export default makeSelectPreview;
export { selectPreviewDomain };
