import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './redux/reducers'; // imports ./redux/reducers/index.js

import App from './components/App/App';
import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// if your in development mode, logger will be added to your project
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
  reducer,
  applyMiddleware(...middlewareList),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
