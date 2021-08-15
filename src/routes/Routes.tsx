import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ProtectedRoute from '../auth/ProtectedRoute';
import Header from '../components/common/header/Header';
import CodeEditor from '../pages/code-editor/CodeEditor';
import Home from '../pages/home/Home';
import routeDetails from './route-details';

const useStyles = makeStyles((theme) => {
  return {
    main: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    page: {
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        //  backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1),
        marginTop: '56px'
      },
      [theme.breakpoints.up('md')]: {
        // backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2),
        marginTop: '64px'
      },
      [theme.breakpoints.up('lg')]: {
        // backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2),
        marginTop: '64px'
      },
    },
    offset: theme.mixins.toolbar,
  };
});

const Routes = () => {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  return <div className={classes.main}>
    <Header/>
    <Paper className={classes.page}>
      <Switch>
        <ProtectedRoute
          path={routeDetails.codeEditor}
          component={CodeEditor}
          exact
        />
        <Route exact path={routeDetails.home}>
          {isAuthenticated ? <Redirect to={routeDetails.codeEditor}/> : <Home/>}
        </Route>
      </Switch>
    </Paper>
  </div>;
};

export default Routes;
