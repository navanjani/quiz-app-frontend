import axios from "axios";

import { questionsFetched } from "./QuestionSlice";

export const fetchQuestions = (id) => {
  return async (dispatch) => {
<<<<<<< HEAD
    const response = await axios.get(`http://localhost:4000/category/${id}`);
=======
    const response = await axios.get(`http://localhost:4000/questions/${id}`);
    console.log(response.data);
>>>>>>> ce84029 (bonus question added)
    dispatch(questionsFetched(response.data));
  };
};
