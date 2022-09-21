import axios from "axios";

import { questionsFetched } from "./QuestionSlice";

export const fetchQuestions = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:4000/category/${id}`);
    dispatch(questionsFetched(response.data));
  };
};
