import * as ActionTypes from '../actions/ActionTypes'

const storeQuestionReducer = (state = {}, action)=>{
    const {type,payload} =action
    switch (type) {
        case ActionTypes.SAVE_QUESTION_DETAILS_PROGRESS:
                return {...state,questionDetails:payload}
        case ActionTypes.SAVE_QUESTION_DETAILS_SUCCESS:
                return {...state,questionDetails:payload}
        case ActionTypes.SAVE_QUESTION_DETAILS_FAILURE:
            return {...state,questionDetails:null}
        default:
            return {...state,questionDetails:''}
    }
}
export default storeQuestionReducer;