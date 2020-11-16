export default function loginReducer(state = {}, action) {
    switch (action.type) {
        case 'getUserInfo':
            localStorage.setItem("token", action.data.token)
            return { ...state, ...action.data }
        default:
            return state
    }
}