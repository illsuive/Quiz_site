import {createSlice} from '@reduxjs/toolkit'

export let QuestionReducer = createSlice({
    name: 'question',
    initialState: {
        question : [],
        answer : [],
        trace : 0,
       
    },
    reducers: {
        setQuestion:  (state, action) => {
            // console.log("Questions set in Redux:", action.payload);
            return {
                ...state,
                question: action.payload,
            }
            
        },
        setAnswer : (state , action)=>{
           return {
            ...state,
            answer : action.payload,
           }
        },
        nextTrace : (state) => {
            return {
                ...state,
                trace: state.trace + 1,
            }
        },
        prevTrace : (state) => {
            return {
                ...state,
                trace: state.trace - 1,
            }
        }, 
        resetAllAction : () => {
            return {
                question : [],
                answer : [],
                trace : 0,
            }
        }     
    }

})



export const { setQuestion ,nextTrace  , prevTrace , resetAllAction , setAnswer} = QuestionReducer.actions
export default QuestionReducer.reducer;