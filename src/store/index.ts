import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import themeMode from './themeMode';
import shop from './shop';
import cart from './cart';
import drawer from './drawer';

export const store = configureStore({
  reducer: {
    themeMode,
    shop,
    cart,
    drawer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
