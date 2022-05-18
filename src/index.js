import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
import { configureStore } from '@reduxjs/toolkit';
import partsReducer from './src/slices/partsSlice.js';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: {
    parts: partsReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
