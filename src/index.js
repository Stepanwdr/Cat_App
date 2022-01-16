import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";

import createSagaMiddleware from "redux-saga";
import watchers from "./store/sagas"
import {Provider} from "react-redux";
import reducer from "./store/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const saga = createSagaMiddleware()
const store = createStore(reducer,
    composeEnhancers(applyMiddleware(saga))
)
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
       <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
saga.run(watchers)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
