import { func } from "prop-types";
import { createStore } from "redux";
import { combineReducers } from "redux"


const reducer = {
    userInfo(state = { name: 'deng', age: 20, sex: 'boy' }, action) {
        switch (action.type) {
            case 'changeUserInfo':
                return { ...state, ...action.data }
            default:
                return state
        }
    },
    componyInfo(state = { name: '洪大集团', adress: '金牛区', personNum: 80 }, action) {
        switch (action.type) {
            case 'adress':
                return { ...state }
            default:
                return state
        }

    }
}



const store = createStore(combineReducers(reducer));



export const changeUserInfo = (data) => {
    return {
        type: 'changeUserInfo',
        data
    }
}


export default store;
