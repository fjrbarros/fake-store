export type IRating = {
  rate: number;
  count: number;
};

export type IProductData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
};

export type IProduct = {
  loading: boolean;
  error: string | undefined;
  data: IProductData[];
};

export type ICategory = {
  loading: boolean;
  error: string | undefined;
  data: string[];
};

export type IShop = {
  categories: ICategory;
  filterCategory: string[];
  products: IProduct;
};
