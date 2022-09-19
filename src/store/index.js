import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";

export default configureStore({
    reducer: {
        appState: appStateReducer,
    },
});
