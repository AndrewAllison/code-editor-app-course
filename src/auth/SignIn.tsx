import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { commonColors } from '../themes/colors';

const useStyles = makeStyles({
  button: {
    color: commonColors.white,

  },
});

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  const onSignIn = () => {
    loginWithRedirect();
  };
  return <Button
    className={classes.button}
    onClick={onSignIn}
  >Sign In</Button>;
};

export default SignIn;
