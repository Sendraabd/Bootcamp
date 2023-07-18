import * as ActionType from '../Constant/UserConstant'

const getFromStorage = (key) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return sessionStorage.getItem(key)
}

const INIT_STATE = {
    userProfile: getFromStorage('profile') ? JSON.parse(sessionStorage.getItem('profile')) : null,
    userSignup: {},
    message:''
}

const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.SIGNIN_REQ:
            return state
        case ActionType.SIGNIN_OK:
            return SigninSuccess(state,action)
        case ActionType.SIGNUP_REQ:
            return state
        case ActionType.SIGNUP_OK:
            return SignupSuccess(state,action)
        case ActionType.SIGNOUT_REQ:
            return state
        case ActionType.SIGNOUT_OK:
            return SignoutSuccess(state,action)
        case ActionType.MESSAGE_ERROR:
            return showMessage(state,action)
        default:
            return {...state}
    }
}

const SigninSuccess = (state, action) => {
    return {
        ...state,
        userProfile:action.payload
    }
}

const SignupSuccess = (state,action) => {
    return {
        ...state,
        userSignup: action.payload
    }
}

const SignoutSuccess = (state,action) => {
    return {
        ...state,
        userProfile: {},
        message: ''
    }
}

const showMessage = (state,action) => {
    return {
        ...state,
        message: action.payload.message
    }
}

export default userReducer