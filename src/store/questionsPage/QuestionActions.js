import axios from "axios";

import { questionsFetched } from "./QuestionSlice";

export const fetchQuestions = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/category/question/${id}`
      );
      dispatch(questionsFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const getHighScore = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/category/table");
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
};
