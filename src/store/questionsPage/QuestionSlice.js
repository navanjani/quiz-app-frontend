import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pregunta: null,
  category: null,
  categoryArr: [],
};

const questionsSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    questionsFetched: (state, action) => {
      state.pregunta = action.payload;
    },
    categorySelected: (state, action) => {
      state.category = action.payload;
    },
    categoryArrFetched: (state, action) => {
      state.categoryArr = action.payload;
    },
  },
});

export const { questionsFetched, categorySelected, categoryArrFetched } =
  questionsSlice.actions;
export default questionsSlice.reducer;
