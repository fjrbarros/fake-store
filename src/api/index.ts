import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProductData } from '../shared';
import axios from 'axios';
import { RootState } from '../store';

export const fetchCategories = createAsyncThunk<
  string[],
  void,
  {
    rejectValue: string | undefined;
  }
>('categories/fetchAllCategories', async (_, thunkApi) => {
  try {
    const response = await axios.get(
      'https://fakestoreapi.com/products/categories',
    );
    return response?.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(
      error?.data || 'Request failed fetch all categories!',
    );
  }
});

export const fetchProductsByCategory = createAsyncThunk<
  IProductData[],
  void,
  {
    rejectValue: string | undefined;
    state: RootState;
  }
>(
  'products/fetchProductsByCategory',
  async (_, { getState, rejectWithValue }) => {
    try {
      const {
        shop: { filterCategory },
      } = getState();
      const url = 'https://fakestoreapi.com/products/category/';

      return await axios
        .all(filterCategory.map(category => axios.get(url + category)))
        .then(
          axios.spread((...responses) => {
            const products: IProductData[] = [];

            responses.forEach(({ data }) =>
              data.forEach((item: IProductData) => products.push(item)),
            );

            return products;
          }),
        );
    } catch (error: any) {
      return rejectWithValue(
        error?.message || 'Request failed fetch products by category!',
      );
    }
  },
);

export const fetchAllProducts = createAsyncThunk<
  IProductData[],
  void,
  {
    rejectValue: string | undefined;
  }
>('products/fetchAllProducts', async (_, thunkApi) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response?.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(
      error?.message || 'Request failed fetch all products!',
    );
  }
});
