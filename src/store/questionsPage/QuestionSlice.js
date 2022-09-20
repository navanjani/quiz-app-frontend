import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    pregunta:null,
    category:null,
}

const questionsSlice = createSlice({
    name:"question",
    initialState,
    reducers:{
        questionsFetched:(state, action)=>{
            state.pregunta = action.payload
        },
        categorySelected:(state,action)=>{
            state.category=action.payload;
        }
    }
})

export const {questionsFetched,categorySelected} = questionsSlice.actions;

export default questionsSlice.reducer