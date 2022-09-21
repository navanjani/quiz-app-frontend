import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pregunta: [],
  preguntaNumber: Math.floor(Math.random() * 9 + 1),
  previousQuestionsNumber: [],
  score: 0,
  count: 0,
  finalCount: 0,
  previousCategories: [],
  newCategoryNumber: Math.floor(Math.random() * 3 + 1),
<<<<<<< HEAD
=======
  bonusModal: false,
>>>>>>> ce84029 (bonus question added)
};

const questionsSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    questionsFetched: (state, action) => {
      state.pregunta = action.payload;
    },
<<<<<<< HEAD

    answerFecthced: (state, action) => {
      state.responder = action.payload;
    },
=======
>>>>>>> ce84029 (bonus question added)
    newPreguntaNumber: (state, action) => {
      state.preguntaNumber = action.payload;
    },
    setPreviousQuestionsNumber: (state, action) => {
      state.previousQuestionsNumber = [
        ...state.previousQuestionsNumber,
        action.payload,
      ];
    },
    setScore: (state) => {
      state.score = state.score + 10;
    },
    setCount: (state, action) => {
      state.count = state.count + 1;
    },
    resetCount: (state) => {
      state.count = 0;
    },
    setFinalCount: (state) => {
      state.finalCount = state.finalCount + 1;
    },
    setPreviousCategories: (state, action) => {
      state.previousCategories = [...state.previousCategories, action.payload];
    },
    newCatNumber: (state, action) => {
      state.newCategoryNumber = action.payload;
    },
<<<<<<< HEAD
=======
    bonusModalSHow: (state) => {
      state.bonusModal = !state.bonusModal;
    },
    bonusQuestion: (state, action) => {
      state.score = state.score - action.payload;
    },
>>>>>>> ce84029 (bonus question added)
  },
});

export const {
  questionsFetched,
  setPreviousQuestionsNumber,
  newPreguntaNumber,
  setCount,
  setScore,
  resetCount,
  setFinalCount,
  setPreviousCategories,
  newCatNumber,
<<<<<<< HEAD
=======
  bonusModalSHow,
  bonusQuestion,
>>>>>>> ce84029 (bonus question added)
} = questionsSlice.actions;

export default questionsSlice.reducer;
