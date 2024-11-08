import React from 'react';
import { configureStore, compose, applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import rootReducer from './redux/rootReducer';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const store = configureStore(
  {
    reducer: { rootReducer },
  },
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
