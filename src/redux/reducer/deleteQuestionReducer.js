import * as ActionTypes from "../actions/ActionTypes";

const deleteQuestionReducer = (state = {},action)=>{
    const {type,payload}=action;
    switch(type){
        case ActionTypes.DELETE_QUESTION_DETAILS_PROGRESS:
            return {...state,value:payload};
        case ActionTypes.DELETE_QUESTION_DETAILS_SUCCESS:
            return {...state,value:payload};
        case ActionTypes.DELETE_QUESTION_DETAILS_FAILURE:
            return {...state,value:payload}
        default:
            return{...state,value:false};
    }
}
export default deleteQuestionReducer;