import { create, getAll, update, getById } from '../local-storage';
import { DataType } from 'utils/global.interface';
import {
  QuantityPayload,
  PricePayload,
} from 'containers/Preview/preview.interface';
import { Product } from 'containers/Products/product.interface';

export const setQuantity = async (payload: QuantityPayload) => {
  const product: Product = await getById(payload.id, DataType.PRODUCTS);
  update({ ...product, quantity: payload.quantity }, DataType.PRODUCTS);
  return create<QuantityPayload>(DataType.QUANTITY_HISTORY, {
    ...payload,
    date: new Date(),
  });
};

export const setPrice = async (payload: PricePayload) => {
  const product: Product = await getById(payload.id, DataType.PRODUCTS);
  update({ ...product, price: payload.price }, DataType.PRODUCTS);
  return create<PricePayload>(DataType.PRICE_HISTORY, {
    ...payload,
    oldPrice: product.price,
    date: new Date(),
  });
};

export const getQuantityHistory = () =>
  getAll<QuantityPayload>(DataType.QUANTITY_HISTORY).slice(0, 5);

export const getPriceHistory = () =>
  getAll<PricePayload>(DataType.PRICE_HISTORY).slice(0, 5).reverse();
