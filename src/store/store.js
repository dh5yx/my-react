import { createStore } from "redux";

const store = createStore(reducer);

function reducer(state = { name: 'deng', age: 20, sex: 'boy' }, action) {
    switch (action.type) {
        case 'changeUserInfo':
            return { ...state, ...action.data }
        default:
            return state
    }
}

export const changeUserInfo = (data) => {
    return {
        type: 'changeUserInfo',
        data
    }
}

export default store;
