import {
  fetchCategories,
  fetchProductsByCategory,
  fetchAllProducts,
} from '../../api';
import { createSlice } from '@reduxjs/toolkit';
import { IShop } from '../../shared';

const initialState: IShop = {
  filterCategory: [],
  categories: {
    loading: true,
    error: '',
    data: [],
  },
  products: {
    loading: true,
    error: '',
    data: [],
  },
};

const shopReducer = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    changeFilterCategory: (state, action) => {
      if (state.filterCategory.find(category => category === action.payload)) {
        state.filterCategory = state.filterCategory.filter(
          category => category !== action.payload,
        );
      } else {
        state.filterCategory.push(action.payload);
      }
    },
    resetFilterCategory: state => {
      state.filterCategory = [];
    },
    resetProductData: state => {
      state.products.data = [];
    },
    resetCategoryError: state => {
      state.categories.error = '';
    },
    resetProductError: state => {
      state.products.error = '';
    },
  },
  extraReducers: builder => {
    /* -------------- FETCH CATEGORIES -------------- */
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories.loading = false;
      state.categories.error = '';
      state.categories.data = action.payload;
    });

    builder.addCase(fetchCategories.pending, state => {
      state.categories.loading = true;
    });

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.categories.loading = false;
      state.categories.error = action.payload;
    });

    /* -------------- FETCH PRODUCTS -------------- */
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products.loading = false;
      state.products.data = action.payload;
      state.products.error = '';
    });

    builder.addCase(fetchAllProducts.pending, state => {
      state.products.loading = true;
    });

    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.products.loading = false;
      state.products.error = action.payload;
    });

    /* -------------- FETCH PRODUCTS BY CATEGORY -------------- */
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.products.loading = false;
      state.products.data = action.payload;
      state.products.error = '';
    });

    builder.addCase(fetchProductsByCategory.pending, state => {
      state.products.loading = true;
    });

    builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
      state.products.loading = false;
      state.products.error = action.payload;
    });
  },
});

export const {
  changeFilterCategory,
  resetFilterCategory,
  resetProductData,
  resetCategoryError,
  resetProductError,
} = shopReducer.actions;

export default shopReducer.reducer;
