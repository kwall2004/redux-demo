import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const routes = {
  path: '/',
  component: require('./components/shell'),
  indexRoute: {
    component: require('./components/home/Home')
  },
  childRoutes: [
    require('./components/home'),
    require('./components/one'),
    require('./components/two')
  ]
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
