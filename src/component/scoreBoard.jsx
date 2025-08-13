
// import {useEffect} from "react";
import '../styles/scoreBoard.css';
// import   { allAnswer } from '../../src/assets/quiz.js'
import {useSelector , useDispatch } from 'react-redux';
import {FetchAnswer} from '../../hooks/fetchQuestion.js';
import {useNavigate } from 'react-router'
import {resetResult} from '../../redux/result_reducer.js'
import {resetAllAction} from '../../redux/question_reducer.js'


// console.log(allAnswer());


const Scoreboard = () => {
  
  let dispatch = useDispatch()
  let navigator = useNavigate();
  let [{answer = [] , isLoading }] = FetchAnswer()
  const { result = [] , user } = useSelector((state) => state.result);
  const { question = []} = useSelector((state) => state.question);

  console.log(user, 'this is user id');
  

  const cleanedResult = (Array.isArray(result) && Array.isArray(answer))
    ? result.map((val, i) =>
        val === '' || val !== answer[i] ? '' : val
      )
    : [];
  

  const score = cleanedResult.filter(e => e !== '').length;
  const total = answer.length;

  const pass = total > 0 ? score / total >= 0.5 : false;

  const handleRestart = () => {
    dispatch(resetResult());
    dispatch(resetAllAction());
    navigator(`/`); 
  };

  // If data is still loading, show a loading message
  if(!isLoading) {
    return (
      <div className="loading-container">
        <h2>Loading Scoreboard...</h2>
      </div>
    );
  }

  return (
    <div className="scoreboard-container">
      {/* Scoreboard Header */}
      <div className={`result-banner ${pass ? 'pass' : 'fail'}`}>
        {pass ? (
          <>
            🎉 <span>Congratulations! You Passed!</span> 🎉
          </>
        ) : (
          <>
            😞 <span>Try Again! You didn't pass.</span> 😞
          </>
        )}
      </div>


      <h2>Quiz Scoreboard</h2>

      <p className="username-display">
        Player: <strong>{user}</strong>
      </p>

      <p className="score-display">
        Your Score: <strong>{cleanedResult.filter(e => e !== '').length} / {answer.length}</strong>
      </p>

      <div className="score-bar">
        <div
          className="score-progress"
          style={{
            width: `${( cleanedResult.filter(e => e !== '').length / question.length) * 100}%`
          }}
        />
      </div>

      {/* Restart Button */}
      <button className="restart-btn" onClick={handleRestart} >
        🔄 Restart Quiz
      </button>
    </div>
  );
};

export default Scoreboard;



// answer array fetch donw 