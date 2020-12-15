import * as ActionTypes from "../actions/ActionTypes";
import fetchQuestionDetails from "../../api/fetchQuestionDetailsApi";
import {fetchQuestionDataSuccess ,fetchQuestionDataFailure} from "../actions/fetchQuestionDetailsAction";
import { takeLatest, put} from "redux-saga/effects";

export function* fetchQuestionHandler() {
  try {
    const response = yield fetchQuestionDetails();
    yield put(fetchQuestionDataSuccess(response));
  } catch (e) {
    yield put(fetchQuestionDataFailure());
  }
}



export default function* fetchQuestionWatcher() {
    yield takeLatest(ActionTypes.FETCH_QUESTION_DETAILS_PROGRESS,fetchQuestionHandler);
}
