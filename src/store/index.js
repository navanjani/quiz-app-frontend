import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import questionReducer from "./questionsPage/QuestionSlice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    question: questionReducer,
  },
});
