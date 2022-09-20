import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./questionsPage/QuestionSlice";

import appStateReducer from "./appState/slice";

export default configureStore({
    reducer: {
        appState: appStateReducer,
        questions: questionSlice,
    },
});
