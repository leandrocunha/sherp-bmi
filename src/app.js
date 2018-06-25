import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import App from './components/App';
import Bmi from './reducers/bmi';
import Sagas from './sagas';
import './sass/main.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ Bmi }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(Sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
