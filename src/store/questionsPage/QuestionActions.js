import axios from "axios";

import { categoryArrFetched, questionsFetched } from "./QuestionSlice";

export const fecthQuestions = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/questions/${id}`);
      const result = response.data;
      console.log(result);
    } catch (e) {
      console.log(e.message);
    }
  };
};

// fetch the category list from endpoint
export const fetchCategoryArr = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/category`);
      const result = response.data;
      const returningArray = result.map((item, index) => {
        return item.name;
      });

      dispatch(categoryArrFetched(returningArray));
    } catch (e) {
      console.log(e.message);
    }


import { questionsFetched } from "./QuestionSlice";

export const fetchQuestions = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:4000/category/${id}`);
    dispatch(questionsFetched(response.data));

  };
};
