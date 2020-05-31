import { create, getAll, removeById, update } from '../local-storage';
import { DataType } from 'utils/global.interface';
import { Product } from 'containers/Products/product.interface';

export const createProduct = (payload: Product) =>
  create<Product>(DataType.PRODUCTS, payload);

export const getProducts = () => getAll<Product>(DataType.PRODUCTS);
export const removeProduct = (id: string) => removeById(id, DataType.PRODUCTS);
export const updateProduct = (data: Product) => update(data, DataType.PRODUCTS);
