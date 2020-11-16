
export default function userReducer(state = { name: 'deng', age: 20, sex: 'boy' }, action) {
    switch (action.type) {
        case 'changeUserInfo':
            return { ...state, ...action.data }
        default:
            return state
    }
}

