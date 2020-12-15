import * as ActionTypes from "../actions/ActionTypes";
import deleteQuestionApi from "../../api/deleteQuestionApi";
import { deleteQuestionSuccess, deleteQuestionFailure } from "../actions/deleteQuestionAction";
import {fetchQuestionDataProgress} from '../actions/fetchQuestionDetailsAction'
import { takeLatest, put } from "redux-saga/effects";

export function* deleteQuestionHandler(action) {
  try {
    const response = yield deleteQuestionApi(action.payload);
    yield put(deleteQuestionSuccess(response));
    yield put(fetchQuestionDataProgress());
  } catch (e) {
    yield put(deleteQuestionFailure(false));
  }
}

export default function* deleteQuestionWatcher() {
    yield takeLatest(ActionTypes.DELETE_QUESTION_DETAILS_PROGRESS,deleteQuestionHandler);
}
