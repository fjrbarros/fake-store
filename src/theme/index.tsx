import React, { useMemo } from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Props {
  children: React.ReactNode;
}

const CustomTheme: React.FC<Props> = ({ children }) => {
  const themeMode = useSelector((data: RootState) => data.themeMode.theme);

  let theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode === 'dark' ? 'dark' : 'light',
        },
        mixins: {
          toolbar: {
            minHeight: '80px',
            '@media (max-width:600px)': {
              minHeight: '60px',
            },
          },
        },
      }),
    [themeMode],
  );

  theme = responsiveFontSizes(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomTheme;
