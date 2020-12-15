import * as ActionTypes from './ActionTypes'
const setQuestionTrue = ()=>({
    type:ActionTypes.SET_CREATE_Question_TRUE,
    payload:true
});

const setQuestionFalse = () =>({
    type:ActionTypes.SET_CREATE_Question_FALSE,
    payload:false
});

export {setQuestionTrue,setQuestionFalse};