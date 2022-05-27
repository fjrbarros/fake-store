import React from 'react';
import { Provider } from 'react-redux';
import { addToCartByStorage } from './store/cart';
import { modeDark, modeLight } from './store/themeMode';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import CustomTheme from './theme';
import store from './store';

const theme = localStorage.getItem('theme');

store.dispatch(theme === 'dark' ? modeDark() : modeLight());

store.dispatch(addToCartByStorage());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <CustomTheme>
        <App />
      </CustomTheme>
    </Provider>
  </React.StrictMode>,
);
