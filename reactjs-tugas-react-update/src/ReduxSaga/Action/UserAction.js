import * as ActionUser from '../Constant/UserConstant'

export const doSignupRequest = (payload) =>({
    type: ActionUser.SIGNUP_REQ,
    payload
})

export const doSignupSuccess = (payload) => ({
    type: ActionUser.SIGNUP_OK,
    payload
})

export const doSigninRequest = (payload) =>({
    type: ActionUser.SIGNIN_REQ,
    payload
})

export const doSigninSuccess = (payload) => ({
    type: ActionUser.SIGNIN_OK,
    payload
})

export const doSignoutRequest = (payload) =>({
    type: ActionUser.SIGNOUT_REQ,
    payload
})

export const doSignoutSuccess = (payload) => ({
    type: ActionUser.SIGNOUT_OK,
    payload
})

export const doMessageError = (payload) => ({
    type: ActionUser.MESSAGE_ERROR,
    payload
})