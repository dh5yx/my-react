export default function componyReducer(state = { name: '洪大集团', adress: '金牛区', personNum: 80 }, action) {
    switch (action.type) {
        case 'adress':
            return { ...state }
        default:
            return state
    }

}