import * as ActionTypes from './ActionTypes'
const fetchQuestionDataProgress = ()=>({
    type:ActionTypes.FETCH_QUESTION_DETAILS_PROGRESS,
});

const fetchQuestionDataSuccess = (data) =>({
    type:ActionTypes.FETCH_QUESTION_DETAILS_SUCCESS,
    payload:data
});

const fetchQuestionDataFailure = () =>({
    type:ActionTypes.FETCH_QUESTION_DETAILS_FAILURE,
});

export {fetchQuestionDataProgress,fetchQuestionDataSuccess,fetchQuestionDataFailure};