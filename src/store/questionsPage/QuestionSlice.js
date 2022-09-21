import {createSlice} from "@reduxjs/toolkit"

const initialState = {

    pregunta:[],
    preguntaNumber:Math.floor((Math.random() * 9)+1),
    previousQuestionsNumber:[],
    score:0,
    count:0,
    finalCount:0,
    previousCategories:[],
    newCategoryNumber:Math.floor((Math.random() * 3)+1),

  

}

const questionsSlice = createSlice({
    name:"question",
    initialState,
    reducers:{
        questionsFetched:(state, action)=>{
            state.pregunta = action.payload
        },

        answerFecthced:(state, action)=>{
            state.responder = action.payload
        },
        newPreguntaNumber:(state, action)=>{
            state.preguntaNumber = action.payload
        },
        setPreviousQuestionsNumber: (state, action)=>{
            state.previousQuestionsNumber = [...state.previousQuestionsNumber,action.payload]
        },
        setScore:(state)=>{
            state.score = state.score + 10
        },
        setCount:(state, action)=>{
            state.count = state.count + 1;
        },
        resetCount:(state)=>{
            state.count = 0
        },
        setFinalCount:(state)=>{
            state.finalCount = state.finalCount +1
        },
        setPreviousCategories:(state, action)=>{
            state.previousCategories = [...state.previousCategories,action.payload]
        },
        newCatNumber:(state, action)=>{
            state.newCategoryNumber = action.payload

        }

    }
})


export const {questionsFetched,setPreviousQuestionsNumber,
    newPreguntaNumber,setCount,
    setScore,resetCount,
    setFinalCount,setPreviousCategories
    ,newCatNumber} = questionsSlice.actions;


export default questionsSlice.reducer