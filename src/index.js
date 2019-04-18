import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import Signup from "./components/Signup";

// Setup Redux
import {Provider} from "react-redux";
import {applyMiddleware, createStore, compose} from "redux";
import promiseMiddleware from "redux-promise";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";


const middlewares = [reduxThunk, promiseMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
        <Provider store={store}>
            <Signup />
        </Provider>, 
    document.getElementById('root')
);

