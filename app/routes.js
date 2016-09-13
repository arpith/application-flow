import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App.jsx';
import StepPage from './components/pages/StepPage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import SignupPage from './components/pages/SignupPage.jsx';

function routes(store) {
  function onEnter(nextState, replace) {
    const state = store.getState();
    if (!state.config.token) {
      if (!(state.config.username && state.config.password)) {
        replace('/signup');
      } else {
        replace('/login');
      }
    } else if (!nextState.params.step) {
      replace(`/step/${state.furthest}`);
    } else if (state.furthest < nextState.params.step) {
      replace(`/step/${state.furthest}`);
    }
  }

  return (
    <Route path='/' component={App}>
      <IndexRedirect to='/step' />
      <Route path='/step(/:step)' component={StepPage} onEnter={onEnter} />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
    </Route>
  );
}

export default routes;
