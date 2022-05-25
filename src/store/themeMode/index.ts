import { createSlice } from '@reduxjs/toolkit';
import { ThemeMode } from '../../shared';

const initialState: ThemeMode = {
  theme: 'light',
};

const themeReducer = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    modeLight: () => ({ theme: 'light' }),
    modeDark: () => ({ theme: 'dark' }),
  },
});

export const { modeDark, modeLight } = themeReducer.actions;

export default themeReducer.reducer;
