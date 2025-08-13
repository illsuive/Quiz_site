import {configureStore , } from '@reduxjs/toolkit'
import QuestionReducer from './question_reducer.js'
import ResultReducer from './result_reducer.js'


let Store = configureStore({
    reducer : {
        question: QuestionReducer,
        result: ResultReducer
    }
})

export default Store;