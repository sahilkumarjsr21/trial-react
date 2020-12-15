import { combineReducers } from "redux";
import createQuestionReducer from './createQuestionReducer'
import fetchQuestionDetailsReducer from "./fetchQuestionDetailsReducer";
import storeQuestionReducer from "./storeQuestionReducer";
import updateQuestionReducer from "./updateQuestionReducer";
import deleteQuestionReducer from "./deleteQuestionReducer";
const rootReducers = combineReducers({
  createQuestionReducer,
  fetchQuestionDetailsReducer,
  storeQuestionReducer,
  updateQuestionReducer,
  deleteQuestionReducer
});

export default rootReducers;
