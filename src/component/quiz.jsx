import { useState   } from 'react'
import { Navigate } from 'react-router'
import '../styles/quiz.css'
import{ useSelector , useDispatch} from 'react-redux'

import {FetchQuestion , moveNext , movePrev } from '../../hooks/fetchQuestion.js'
import {PushAnswe , removeLastOption} from '../../hooks/setResult.js'


let  Quiz = ()  => {
  let dispatch = useDispatch();
  let [checked, setChecked] = useState(undefined);
  console.log(checked);
  
  let [answer, setAnswer] = useState(undefined);
  let [ansIndex , setAnsIndex] = useState('');

  let [{isLoading , error , apiData }] = FetchQuestion();
   
  const { question , trace  } = useSelector((state) => state.question);
   const {result} = useSelector((state) => state.result);
  

  console.log(apiData.question);
  

  const handleNext = () => {
   if(trace <= question.length ) {
     dispatch(moveNext);
    }
    dispatch(PushAnswe(ansIndex));
    setAnsIndex('')
  };

  const handlePrev = () => {
    if(trace > 0) {
      dispatch(movePrev);
      dispatch(removeLastOption())
    }
  }

    

    

  let onSelect = (i) => {
    setAnswer(apiData.question[trace].options[i]);
    setChecked(true);
    setAnsIndex(i);
  }

  if(!isLoading ) {
    return (
      <div className="loading-container">
        <h2>Loading Questions...</h2>
      </div>
    )
  }

  if(error) {
    return (
      <div className="error-container">
        <h2>Error fetching questions: {error.message}</h2>
      </div>
    )
  }

  if(result.length  >= apiData.question.length){
    return <Navigate to={"/Scoreboard"} replace={true}></Navigate>
  }
  
  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
    <div className="quiz-header">
      <div className="question-number">Question {trace + 1} of {apiData.question.length}</div>
      <div className="question-text">{apiData.question[trace].question}</div>
    </div>
  
    <ul className="options">
      {apiData.question[trace].options.map((option, index) => (
        <li className="option" key={index}>
          <input type="radio" id={`option${index}`} name="answer" value={option} checked={option == answer} onChange={() => onSelect(index)} />
          <label htmlFor={`option${index}`}>{option}</label>
        </li>
      ))}
    </ul>
  {/*  */}
    <button className="submit-btn" onClick={handleNext} disabled={apiData.question.length < trace + 1 ? true : false}>Submit</button>
    <div className="nav-buttons">
    <button disabled={trace === 0} id="prev-btn" onClick={handlePrev}>Previous</button>
    <button id="next-btn" onClick={handleNext} disabled={trace === apiData.question - 2}>Next</button>
  </div>
  </div>  
  
  )
}

export default Quiz;
