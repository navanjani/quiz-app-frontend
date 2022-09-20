import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    pregunta:null
}

const questionsSlice = createSlice({
    name:"question",
    initialState,
    reducers:{
        questionsFetched:(state, action)=>{
            State.pregunta = action.payload
        }
    }
})

export const {questionsFetched} = questionsSlice.actions;

export default questionsSlice.reducer