import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
reportWebVitals();
