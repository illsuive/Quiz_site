import axios from 'axios';
import Data  from '../src/assets/quiz';

export let Question = async () => {
    try {
        let response = await axios.get(`${import.meta.env.VITE_API_URL}/api/Question`);
        // console.log("Questions fetched successfully:", response.data.data[0].question);
        // console.log("Response data:", Data);
        return  response.data.data;
    } catch (error) {
        console.error("Error fetching questions:", error);
        throw error;   
    }
}

export let PostResult = async (userID , result) => {
    try {
        let response = await axios.post(`${import.meta.env.VITE_API_URL}/api/result`, result , userID);
        console.log("Result posted successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error posting result:", error);
        throw error;
        
    }
}