import * as ActionTypes from './ActionTypes'
const deleteQuestionProgress = (payload)=>({
    type:ActionTypes.DELETE_QUESTION_DETAILS_PROGRESS,
    payload:payload
});

const deleteQuestionSuccess = (payload) =>({
    type:ActionTypes.DELETE_QUESTION_DETAILS_SUCCESS,
    payload:payload
});

const deleteQuestionFailure = (payload) =>({
    type:ActionTypes.DELETE_QUESTION_DETAILS_FAILURE,
    payload:payload
});

export {deleteQuestionProgress,deleteQuestionSuccess,deleteQuestionFailure};