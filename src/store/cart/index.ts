import { createSlice } from '@reduxjs/toolkit';
import { ICart, IItemsCart } from '../../shared/interfaces/cart';

const initialState: ICart = {
  items: [],
  subTotal: 0,
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const findItem = state.items.findIndex(
        item => item.id === actions.payload.id,
      );
      if (findItem !== -1) {
        state.items[findItem].quantity = actions.payload.quantity;
      } else {
        state.items.push(actions.payload);
      }
      addStorageItems(state.items);
      state.subTotal = calcSubtotal(state.items);
    },
    removeToCart: (state, actions) => {
      state.items = state.items.filter(item => item.id !== actions.payload.id);
      state.subTotal = calcSubtotal(state.items);
      addStorageItems(state.items);
    },
    resetCart: state => {
      state.items = [];
      state.subTotal = 0;
      addStorageItems(state.items);
    },
    addToCartByStorage: state => {
      const storageItems = localStorage.getItem('shop-cart');
      if (!storageItems) return;
      state.items = JSON.parse(storageItems);
      state.subTotal = calcSubtotal(state.items);
    },
  },
});

const calcSubtotal = (array: IItemsCart[]) => {
  const value = array.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return Number(value.toFixed(2));
};

const addStorageItems = (array: IItemsCart[]) => {
  localStorage.setItem('shop-cart', JSON.stringify(array));
};

export const { addToCart, removeToCart, resetCart, addToCartByStorage } =
  cartReducer.actions;

export default cartReducer.reducer;
