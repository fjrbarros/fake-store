import { IProductData } from './shop';

export type IItemsCart = IProductData & {
  quantity: number;
};

export type ICart = {
  items: IItemsCart[];
  subTotal: number;
};
