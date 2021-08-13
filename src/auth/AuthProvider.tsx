import { Auth0Provider } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';
import { useHistory } from 'react-router-dom';
import appConfig from '../config/config';

const AuthProvider = (props: PropsWithChildren<any>) => {
  const history = useHistory();
  const onRedirectCallback = (appState: any) => {
    history.push(appState?.retufnTo || window.location.pathname);
  };
  const { children } = props;
  return <Auth0Provider
    domain={appConfig.auth0Domain}
    clientId={appConfig.auth0ClientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    {children}
  </Auth0Provider>;
};

export default AuthProvider;
