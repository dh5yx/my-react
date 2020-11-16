
import user from "../api/login"


export const changeUserInfo = (data) => {
    return {
        type: 'changeUserInfo',
        data
    }
}

const getUserInfo = (data) => {
    return {
        type: 'getUserInfo',
        data
    }
}

export const login = (params, hisroty) => async (dispath) => {
    let res = await user.login(params)
    dispath(getUserInfo({ ...params, ...res }))
    hisroty.push("/home")
}
