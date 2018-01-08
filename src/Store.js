import React from 'react';
import { auto, reducers } from 'redux-auto';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

const dtx = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const webpackModules = require.context('./concerns', true, /^.*\/[a-z].*\.js$/);

const composeEnhancers =
  typeof window === 'object' && dtx ? dtx({ name: 'Wooticus Prime' }) : compose;

function configureStore(history) {
  reducers['router'] = routerReducer;

  const enhancer = composeEnhancers(
    // routerMiddleware(history),
    applyMiddleware(auto(webpackModules, webpackModules.keys()))
  );
  return createStore(combineReducers(reducers), enhancer);
}

export default configureStore;
