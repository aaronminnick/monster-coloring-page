import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice.js';
import partsReducer from './slices/partsSlice.js';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: {
    page: pageReducer,
    parts: partsReducer
  }
});

//deprecated warning in devtools - suggests to update to createRoot for React 18
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
