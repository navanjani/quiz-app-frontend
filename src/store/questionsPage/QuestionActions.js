import axios from "axios";


import { questionsFetched, setHighScore } from "./QuestionSlice";

import { questionsFetched, categoryArrFetched } from "./QuestionSlice";


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
      dispatch(setHighScore(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const postHighScore = ({ name, score }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/category/postscore",
        { name, score }
      );
      console.log(response);

      dispatch();
    } catch (e) {}
  };
};
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
  };
};
