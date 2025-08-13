import {createSlice} from '@reduxjs/toolkit'

export let ResultReducer = createSlice({
    name: 'result',
    initialState: {
        user: null,
        result: [],
    },
    reducers: {
        setUserid : (state, action) => {
            state.user = action.payload;
        },
        pushresult: (state, action) => {
            state.result.push(action.payload)
        },
        clearResult: (state) => {
            state.result.pop();
        },
        resetResult : ()=> {
            return {
                user: null,
                result: [],
            }
        }
    }
})


export default ResultReducer.reducer
export const { setUserid , pushresult ,clearResult , resetResult} = ResultReducer.actions;