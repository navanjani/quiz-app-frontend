import axios from "axios";

import { questionsFetched } from "./QuestionSlice";

export const fetchQuestions = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:4000/questions/${id}`);
    console.log(response.data);
    dispatch(questionsFetched(response.data));
  };
};
