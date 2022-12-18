import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import './index.css';
import App from './App';
import { gatherData } from './reducers';

const logger=createLogger();

const store=configureStore({
  reducer:gatherData,
  middleware: [thunkMiddleware, logger]
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App store={store}/>
);
