import {pushresult , clearResult , setUserid } from '../redux/result_reducer.js'
// import {useDispatch} from 'react-redux';

// let dispatch = useDispatch();


export const PushAnswe = (result) => async (dispatch ) => {
    try {
        await dispatch(pushresult(result));
    } catch (error) {
        console.error("Error pushing result:", error);
        
    }
}

export const removeLastOption = () => async (dispatch) => {
    try {
        await dispatch(clearResult());
    } catch (error) {
        console.error("Error clearing result:", error);
    }
}

export const setId = (user) => async (dispatch) => {
    try {
        await dispatch(setUserid(user));
    } catch (error) {
        console.error("Error setting user ID:", error);
    }
}