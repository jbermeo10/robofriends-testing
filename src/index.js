import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //for redux use
import { createStore, applyMiddleware, combineReducers } from 'redux'; //for redux use
import { createLogger } from 'redux-logger'; //for redux logger use
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers'; //importing reducer
import 'tachyons';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

const logger = createLogger();

//do the following because we just have one reducer which is 'searchRobots'
//const store = createStore(rootReducer)

const rootReducer = combineReducers({ searchRobots, requestRobots})
const store = 
    createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)) 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
