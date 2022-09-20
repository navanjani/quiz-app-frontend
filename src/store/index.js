import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import questionReducer from "./question/slice";

export default configureStore({
    reducer: {
        appState: appStateReducer,
        question: questionReducer,
    },
});
