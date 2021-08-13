import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, makeStyles, Switch, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { toggleDarkMode } from '../../../store/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Brightness2 as DarkModeIcon } from '@material-ui/icons';
import AuthenticatedButtons from './AuthenticatedButtons';
import UnauthenticatedButtons from './UnauthenticatedButtons';

const useStyles = makeStyles({
  title: {
    flex: 1,
  },
});

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(state => state.darkMode);
  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const classes = useStyles();
  return <AppBar>
    <Toolbar>
      <Typography variant="h6" className={classes.title}>Code Editor App</Typography>
      <DarkModeIcon></DarkModeIcon>
      <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
      {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons /> }
    </Toolbar>
  </AppBar>;
};

export default Header;
