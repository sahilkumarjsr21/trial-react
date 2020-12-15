import * as ActionTypes from "../actions/ActionTypes";
import loginApi from "../../api/loginapi";
import { successLogin, failureLogin} from "../actions/UserActionLogin";
import { takeLatest, put } from "redux-saga/effects";
import history from '../../components/history'

export function* loginHandler(action) {
  try {
    const response = yield loginApi(action.payload);
    yield put(successLogin(response));
    localStorage.setItem('login',response)
    const isLoggedIn =JSON.parse(localStorage.getItem('state')).loginReducer.isLoggedIn;
    if(isLoggedIn){
        history.push('/dashboard')      
    }
  } catch (e) {
    yield put(failureLogin());
  }
}

export default function* loginWatcher() {
      yield takeLatest(ActionTypes.LOGIN_USER_PROGRESS,loginHandler);
}
