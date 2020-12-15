import * as ActionTypes from './ActionTypes'

const sendData = (payload)=>({
    type:ActionTypes.SIGN_UP_USER_PROGRESS,
    payload :  payload
});

const successSignUp = (response)=>({
    type:ActionTypes.SIGN_UP_USER_SUCCESS,
    payload : response
});

const failureSignUp = ()=>({
    type:ActionTypes.SIGN_UP_USER_FAILURE,
});

export {sendData, successSignUp, failureSignUp};