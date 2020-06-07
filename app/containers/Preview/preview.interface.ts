export interface QuantityPayload {
  id: string;
  quantity: number;
  oldQuantity?: number;
  date?: Date;
}
export interface PricePayload {
  id: string;
  price: number;
  oldPrice?: number;
  date?: Date;
}
