import * as ActionTypes from './ActionTypes'

const progressUpdate =(payload)=>({
    type: ActionTypes.UPDATE_QUESTION_DETAILS_PROGRESS,
    payload:payload
});

const succcessUpdate =(payload)=>({
    type:ActionTypes.UPDATE_QUESTION_DETAILS_SUCCESS,
    payload:payload
});

const failureUpdate = ()=>({
    type:ActionTypes.UPDATE_QUESTION_DETAILS_FAILURE
});

export {progressUpdate,succcessUpdate,failureUpdate};