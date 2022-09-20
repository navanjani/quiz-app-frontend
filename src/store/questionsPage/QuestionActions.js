import axios from "axios";

import {questionsFetched} from "./QuestionSlice";

export const fecthQuestions = (id)=>{
    return async (dispatch) =>{
        try {
            const response = await axios.get(`http://localhost:4000/questions/${id}`)
            const result = response.data
            console.log(result)
        }
        catch (e) {
            console.log(e.message)
        }
    }
}