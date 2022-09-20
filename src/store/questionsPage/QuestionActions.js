import axios from "axios";

import {questionsFetched} from "./QuestionSlice";

export const FecthQuestions = (id) =>{
    return async (dispatch) =>{
        const response = await axios.get(`http://localhost:4000/questions/${id}`)
        dispatch(questionsFetched(response.data))
    }
}