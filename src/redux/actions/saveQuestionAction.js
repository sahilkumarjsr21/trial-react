import * as ActionTypes from './ActionTypes'

const progressData =(payload)=>({
    type:ActionTypes.SAVE_QUESTION_DETAILS_PROGRESS,
    payload:payload
});

const setData = (payload) =>({
    type:ActionTypes.SAVE_QUESTION_DETAILS_SUCCESS,
    payload:payload
});

const failureSaveData = ()=>({
    type:ActionTypes.SAVE_QUESTION_DETAILS_FAILURE
});

export {progressData,setData,failureSaveData};