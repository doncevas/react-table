import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface PreviewState {
  readonly default: any;
}

/* --- ACTIONS --- */
type PreviewActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = PreviewState;
type ContainerActions = PreviewActions;

export { ContainerState, ContainerActions };
