import React, { useMemo } from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

interface Props {
  children: React.ReactNode;
}

const CustomTheme: React.FC<Props> = ({ children }) => {
  let theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
        },
      }),
    [],
  );

  theme = responsiveFontSizes(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomTheme;
