import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/rootReducer';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const store = configureStore({
  reducer: { rootReducer },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
