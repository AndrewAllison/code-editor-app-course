import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthProvider from './auth/AuthProvider';
import reportWebVitals from './reportWebVitals';
import ReduxProvider from './store/ReduxProvider';
import './index.css';
import CustomThemeProvider from './themes/CustomThemeProvider';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <AuthProvider>
          <CustomThemeProvider>
            <CssBaseline />
            <App/>
          </CustomThemeProvider>
        </AuthProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
