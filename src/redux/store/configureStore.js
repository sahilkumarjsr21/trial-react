import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducer/rootReducers'
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from 'redux-saga'
import signUpSaga from '../sagas/signUpSaga'
import loginSaga  from '../sagas/loginSaga'
import storeQuestionSaga from '../sagas/storeQuestionSaga'
import fetchQuestionDetailsSaga from '../sagas/fetchQuestionDetailsSaga'
import updateQuestionDetailsSaga from '../sagas/updateQuestionDetailSaga'
import deleteQuestionDetailsSaga from '../sagas/deleteQuestionDetailsSaga'

const saveToLocalStorage =(state)=>{
  try{
    const serializedState=JSON.stringify(state)
    localStorage.setItem('state',serializedState)
  }catch(e){
  }
}
const loadToLocalStorage =()=>{
  try{
    const serializedState=localStorage.getItem('state')
    if(serializedState===null) return undefined
    return JSON.parse(serializedState)
  }catch(e){
      return undefined
  }
}
export const persistedState=loadToLocalStorage()
const sagaMiddleWare = createSagaMiddleWare()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(signUpSaga);
sagaMiddleWare.run(loginSaga);
sagaMiddleWare.run(storeQuestionSaga);
sagaMiddleWare.run(fetchQuestionDetailsSaga);
sagaMiddleWare.run(updateQuestionDetailsSaga);
sagaMiddleWare.run(deleteQuestionDetailsSaga);
store.subscribe(()=>saveToLocalStorage(store.getState()))
export default store;
