import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux"
import thunk from 'redux-thunk'
import reducer from "./reducer/index"


const store = createStore(combineReducers(reducer),applyMiddleware(thunk));


export default store;
