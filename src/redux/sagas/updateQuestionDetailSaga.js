import * as ActionTypes from "../actions/ActionTypes";
import updateQuestionDetailsApi from "../../api/updateQuestionDetailsApi";
import { succcessUpdate, failureUpdate } from "../actions/updateQuestionAction";
import {fetchQuestionDataProgress} from '../actions/fetchQuestionDetailsAction'
import { takeLatest, put } from "redux-saga/effects";

export function* updateQuestionHandler(action) {
  try {
    let {payload} = action;
     const data = {
       questionId: payload.questionId,
       questionDescription: payload.questionDescription,
       questionScore: payload.questionScore,
       difficulty: payload.difficulty,
        choices: payload.choices.length >=5 ? payload.choices.slice(0,4) : payload.choices
     }
     console.log("Action", action)
     console.log("Data", data)
    const response = yield updateQuestionDetailsApi(data);
    yield put(succcessUpdate(response));
    yield put(fetchQuestionDataProgress());
  } catch (e) {
    yield put(failureUpdate());
  }
}

export default function* updateQuestionWatcher() {
  yield takeLatest(ActionTypes.UPDATE_QUESTION_DETAILS_PROGRESS,updateQuestionHandler);
}
