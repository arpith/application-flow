import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App.jsx';
import StepPage from './components/StepPage.jsx';
import LoginPage from './components/LoginPage.jsx';

function routes(store) {
  function onEnter(nextState, replace) {
    if (!store.isLoggedIn) {
      replace('/login');
    } else if (!nextState.params.step) {
      repace(`/step/${store.furthest}`);
    } else if (store.furthest < nextState.params.step) {
      replace(`/step/${store.furthest}`);
    }
  }
  return (
    <Route path='/' component={App}>
      <IndexRedirect to='/step' />
      <Route path='/step(/:step)' component={StepPage} onEnter={onEnter} />
      <Route path='/login' component={LoginPage} />
    </Route>
  );
}

export default routes;
