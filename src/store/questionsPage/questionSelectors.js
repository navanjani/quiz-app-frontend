export const selectQuestions = (reduxState) => reduxState.question.pregunta;
export const selectCategoryArr = (reduxState) =>
  reduxState.question.categoryArr;
export const selectNewQuestionNumber = (reduxState) =>
  reduxState.question.preguntaNumber;
export const selectPreviousQuestionsNumber = (reduxState) =>
  reduxState.question.previousQuestionsNumber;
export const selectScore = (reduxState) => reduxState.question.score;
export const selectCount = (reduxState) => reduxState.question.count;
export const selectFinalCount = (reduxState) => reduxState.question.finalCount;
export const selectPreviousCategories = (reduxState) =>
  reduxState.question.previousCategories;
export const selectNewCategory = (reduxState) =>
  reduxState.question.newCategoryNumber;
export const selectBonusModal = (reduxState) => reduxState.question.bonusModal;
export const selectBonusCounter = (reduxState) =>
  reduxState.question.bounusCounter;
export const selectHighScore = (reduxState) => reduxState.question.highScore;
export const selectHScoreModalState = (reduxState) =>
  reduxState.question.showHighScoreModal;
