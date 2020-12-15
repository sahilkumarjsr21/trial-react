import * as ActionTypes from "../actions/ActionTypes";

const fetchQuestionDetailsReducer = (state = {},action)=>{
    const {type,payload}=action;
    switch(type){
        case ActionTypes.FETCH_QUESTION_DETAILS_PROGRESS:
            return {...state,data : null};
        case ActionTypes.FETCH_QUESTION_DETAILS_SUCCESS:
            return {...state,data:payload};
        case ActionTypes.FETCH_QUESTION_DETAILS_FAILURE:
            return {...state,data:null};
        default:
            return{...state,data:null};
    }
}
export default fetchQuestionDetailsReducer;