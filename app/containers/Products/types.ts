import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { Product } from './product.interface';

/* --- STATE --- */
interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
}

/* --- ACTIONS --- */
type ProductsActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = ProductsState;
type ContainerActions = ProductsActions;

export { ContainerState, ContainerActions };
