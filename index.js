'use strict';
require('babel-core/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const redux = require('redux');
const express = require('express');
const RouterContext = require('./app/RouterContext');
const routes = require('./app/routes').default;
const reducers = require('./app/reducers').default;

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  const store = redux.createStore(reducers);
  ReactRouter.match({ routes: routes(store), location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send({error: error.message});
    } else if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const preloadedState = JSON.stringify(store.getState());
      const reactString = ReactDOMServer.renderToString(RouterContext(renderProps));
      res.render('layout', {react: reactString, preloadedState: preloadedState});
    } else {
      res.status(404).send('Not Found');
    }
  });
});  

const port = process.env.PORT || 3000;
console.log("Starting up on port " + port);
app.listen(port);
