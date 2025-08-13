import React, {useState } from "react";
import '../styles/welcome.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router';
import { setId } from '../../hooks/setResult.js';
import { useDispatch  } from 'react-redux';

import {Question} from '../../helper/api.js'; // Importing the API function
  
Question()

const WelcomePage = () => {  
  const dispatch = useDispatch();  
  const navigator = useNavigate();    
  const [username, setUsername] = useState("");
  // const { userID } = useSelector((state) => state.result);

    // Logic to start quiz can go here
  
    // console.log(userID);
    

  // Logic to handle quiz start can be added here
  const handleStart = () => {
      if (username.trim() === "") {
        alert("Please enter your username to start the quiz.");
        return;
      }
      dispatch(setId(username));
      alert(`Welcome ${username}!`);
      navigator(`/Quiz`);  
    };



  return (
    <div className="welcome-container">
      <h1>Welcome to the Quiz!</h1>
      {/* <h1>{import.meta.env.VITE_API_URL}</h1> */}
      <p className="disclaimer">
        Disclaimer: Please answer all questions honestly. Your responses are
        confidential and only used for evaluating your knowledge.
      </p>
      <ul>
        <li>Each question has multiple choice answers.</li>
        <li>Choose the best answer for each question.</li>
        <li>Click 'Next' to proceed to the next question.</li>
        <li>Click 'Previous' to go back to the previous question.</li>
        <li>At the end, you can review your answers.</li>
        <li>Good luck!</li>
      </ul>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="username-input"
      />
      <button onClick={handleStart} className="start-button">
       Start Quiz
      </button>
    </div>
  )
}

export default WelcomePage;
