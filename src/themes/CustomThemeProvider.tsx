import { createTheme, MuiThemeProvider } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import { useAppSelector } from '../store/hooks';
import { appColors, darkModeColors } from './colors';

const CustomThemeProvider = (props: PropsWithChildren<{ }>) => {
  const { children } = props;
  const darkMode = useAppSelector(state => state.darkMode);
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: appColors.primary
      },
      background: {
        default: darkMode ? darkModeColors.background : appColors.background
      },
      text: {
        primary: darkMode ? darkModeColors.font : appColors.font
      }
    }
  })
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default CustomThemeProvider;

