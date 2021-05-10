import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'tachyons' ;
import {createStore ,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import reportWebVitals from './reportWebVitals';
import App from './App.js';
import {searchRobots,getRobots} from './reducer';
import thunkMiddleware from 'redux-thunk';


const logger=createLogger();

const r=combineReducers({searchRobots,getRobots});


const store=createStore(r,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
   
    <Provider store={store}>
<App/>
</Provider>
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
