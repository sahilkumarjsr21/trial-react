import * as ActionTypes from "../actions/ActionTypes";

const createQuestionReducer = (state = {},action)=>{
    const {type,payload}=action;
    switch(type){
        case ActionTypes.SET_CREATE_QUESTION_TRUE:
            return {...state,value:payload};
        case ActionTypes.SET_CREATE_QUESTION_FALSE:
            return {...state,value:payload};
        default:
            return{...state,value:false};
    }
}
export default createQuestionReducer;