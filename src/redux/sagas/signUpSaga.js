import * as ActionTypes from "../actions/ActionTypes";
import signUpApi from "../../api/signupapi";
import { successSignUp,failureSignUp } from "../actions/UserActionSignUp";
import { takeLatest, put } from "redux-saga/effects";
import history from '../../components/history'
export  function* signUpHandler(action) {
  try {
    const response = yield signUpApi(action.payload);
    yield put(successSignUp(response));
    localStorage.setItem('login',response)
    const isLoggedIn =JSON.parse(localStorage.getItem('state')).signUpReducer.isLoggedIn;
    if(isLoggedIn)
      history.push('/dashboard')
  } catch (e) {
    yield put(failureSignUp());
  }
}

export default function* signUpWatcher() {
   yield takeLatest(ActionTypes.SIGN_UP_USER_PROGRESS,signUpHandler);
}
