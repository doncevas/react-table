import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface LayoutState {
  readonly default: any;
}

/* --- ACTIONS --- */
type LayoutActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = LayoutState;
type ContainerActions = LayoutActions;

export { ContainerState, ContainerActions };
