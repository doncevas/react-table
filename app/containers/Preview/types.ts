import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { PricePayload, QuantityPayload } from './preview.interface';

/* --- STATE --- */
interface PreviewState {
  quantityHistory: QuantityPayload[];
  priceHistory: PricePayload[];
  isLoading: boolean;
}

/* --- ACTIONS --- */
type PreviewActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = PreviewState;
type ContainerActions = PreviewActions;

export { ContainerState, ContainerActions };
