import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import CustomTheme from './theme';
import { Provider } from 'react-redux';
import { modeDark, modeLight } from './store/themeMode';
import store from './store';

const theme = localStorage.getItem('theme');

store.dispatch(theme === 'dark' ? modeDark() : modeLight());

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
