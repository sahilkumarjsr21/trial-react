import * as ActionTypes from './ActionTypes'

const sendDataLogin = (payload)=>{
    return{
    type:ActionTypes.LOGIN_USER_PROGRESS,
    payload :  payload
}};

const successLogin = (response)=>{
    return {
    type:ActionTypes.LOGIN_USER_SUCCESS,
    payload : response
}};

const failureLogin = ()=>({
    type:ActionTypes.LOGIN_USER_FAILURE,
});

const logout = ()=>({types: ActionTypes.LOGOUT});

export {sendDataLogin, successLogin, failureLogin, logout};