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
      state.subTotal = calcSubtotal(state.items);
    },
    removeToCart: (state, actions) => {
      state.items = state.items.filter(item => item.id !== actions.payload.id);
      state.subTotal = calcSubtotal(state.items);
    },
    resetCart: state => {
      state.items = [];
      state.subTotal = 0;
    },
  },
});

const calcSubtotal = (array: IItemsCart[]) => {
  const value = array.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return Number(value.toFixed(2));
};

export const { addToCart, removeToCart, resetCart } = cartReducer.actions;

export default cartReducer.reducer;
