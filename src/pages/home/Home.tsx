import { makeStyles } from '@material-ui/core';
import React from 'react';
import ProgrammingLanguagesList from '../../components/home/ProgrammingLanguagesList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundClip: theme.palette.background.default
  },
  welcomeMessage: {
    padding: '15px',
    fontSize: '30px',
    color: theme.palette.text.primary
  }
}));

const Home = () => {
  const classes = useStyles();
  return <div className={classes.root}>
    <div className={classes.welcomeMessage}>Welcome</div>
    <ProgrammingLanguagesList />
  </div>;
};

export default Home;
