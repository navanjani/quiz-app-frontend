export const selectQuestions = (reduxState) => reduxState.questions.pregunta;
export const selectNewQuestionNumber = (reduxState) => reduxState.questions.preguntaNumber;
export const selectPreviousQuestionsNumber = (reduxState) => reduxState.questions.previousQuestionsNumber;
export const selectScore = (reduxState) => reduxState.questions.score;
export const selectCount = (reduxState) => reduxState.questions.count;
export const selectFinalCount = (reduxState) => reduxState.questions.finalCount;
export const selectPreviousCategories = (reduxState) => reduxState.questions.previousCategories;
export const selectNewCategory = (reduxState) => reduxState.questions.newCategoryNumber;