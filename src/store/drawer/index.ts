import { createSlice } from '@reduxjs/toolkit';

type IDrawer = {
  isOpen: boolean;
};

const initialState: IDrawer = {
  isOpen: false,
};

const drawerReducer = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    openDrawer: () => ({ isOpen: true }),
    closeDrawer: () => ({ isOpen: false }),
  },
});

export const { closeDrawer, openDrawer } = drawerReducer.actions;

export default drawerReducer.reducer;
