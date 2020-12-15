import * as ActionTypes from "../actions/ActionTypes";
import addQuestionDetailsApi from "../../api/addQuestionDetailsApi";
import { setData, failureSaveData } from "../actions/saveQuestionAction";
import {fetchQuestionDataProgress} from '../actions/fetchQuestionDetailsAction'
import { takeLatest, put } from "redux-saga/effects";

export function* saveQuestionHandler(action) {
  try {
    const response = yield addQuestionDetailsApi(action.payload);
    yield put(setData(response));
    yield put(fetchQuestionDataProgress());
  } catch (e) {
    yield put(failureSaveData());
  }
}

export default function* saveQuestionWatcher() {
     yield takeLatest(ActionTypes.SAVE_QUESTION_DETAILS_PROGRESS,saveQuestionHandler);
}
