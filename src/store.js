import rootReducer from './reducer';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk'

const enhancer =  (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ : null) || compose;

export const store = createStore(rootReducer, enhancer(applyMiddleware(thunk)));