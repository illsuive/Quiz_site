import { useState ,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Data from '../src/assets/quiz.js';
import { Question } from '../helper/api.js';
import {allAnswer} from '../src/assets/quiz.js'
import {setQuestion , nextTrace , prevTrace , setAnswer } from '../redux/question_reducer.js'


export const FetchQuestion =  () => {

    const dispatch = useDispatch();
    let [getData , setGetData] = useState({isLoading : false, apiData : [] , error : null});
    


    useEffect(() => {
        setGetData(prev  => ({ ...prev, isLoading: true }));


        (async () => {
            try {
                // Simulating an API call with a delay
                // let [{question , answer }] = await Question();
                // console.log(answer , question);
                // console.log(typeof question);
                // console.log(typeof Data);
                
                
                // console.log("Data Questions:", Data);
                
                // console.log("Fetched Questions:", question);
                // console.log("Fetched Answers:", answer);
                let question = await Data;
                // let question = await Question();
                // console.log(question[0].question);
                
                
                
                if(question.length > 0){
                    setGetData(prev => ({...prev , isLoading : true }));
                    setGetData(prev => ({ ...prev, apiData: {question} }));

                    
                    // Dispatching the question to the Redux store
                    dispatch(setQuestion(question));
                }else{
                    throw new Error("No questions found in the data");
                }
            } catch (error) {
                // Handling any errors that occur during the fetch
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, error: error.message }));
            }
        })()
    }, [dispatch]);

    
    return [getData , setGetData];
}

export const FetchAnswer = () => {
    const dispatch = useDispatch();
    let [getAnswer , setAnswe] = useState({isLoading : false, indexAns : [] , error : null});

    useEffect(() => {
        setAnswe(prev  => ({ ...prev, isLoading: true }));


        (async ()=>{
            try {

                // Simulating an API call with a delay
                let indexAns = await allAnswer();
                if(indexAns.length > 0){
                    setAnswe(prev => ({...prev , isLoading : true }));
                    setAnswe(prev => ({ ...prev, answer: indexAns }));


                    // Dispatching the question to the Redux store
                    dispatch(setAnswer(indexAns));
                }else{
                    throw new Error("No questions found in the data");
                }
            } catch (error) {
                // Handling any errors that occur during the fetch
                setAnswe(prev => ({ ...prev, isLoading: false }));
                setAnswe(prev => ({ ...prev, error: error.message }));
    
                
            }
        })()
    }, [dispatch]);

    
    return [getAnswer , setAnswe];
}

// move actions 

export const moveNext = async (dispatch) => {
    try {
        dispatch(nextTrace());
    } catch (error) {
        console.error("Error moving to next question:", error);
    }
}

export const movePrev = async (dispatch) => {
    try {
        dispatch(prevTrace());
    } catch (error) {
        console.error("Error moving to previous question:", error);
    }
}