import { create, getAll, removeById } from '../local-storage';
import { DataType } from 'utils/global.interface';
import { Product } from 'containers/Products/product.interface';

export const createProduct = (payload: Product) =>
  create<Product>(DataType.PRODUCTS, payload);

export const getProducts = () => getAll<Product>(DataType.PRODUCTS);
export const removeProduct = (id: string) => removeById(id, DataType.PRODUCTS);
