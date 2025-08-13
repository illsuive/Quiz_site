import Quiz  from './component/quiz.jsx'
import WelcomePage from './component/welcome.jsx'
import Scoreboard from './component/scoreBoard.jsx'
import { Route , Routes  } from 'react-router-dom'
import NotFound from './component/notFound.jsx'
import './App.css'
import { Checkuser } from '../helper/helper.jsx'
// import dotenv from 'dotenv';
// dotenv.config();
function App() {  
  return (
    <div>
       <Routes>
          <Route path={'/'} element={<WelcomePage />} />  
          <Route path={'/Quiz'} element={<Checkuser element={<Quiz />} />} />
          <Route path={'/Scoreboard'} element={<Checkuser element={<Scoreboard />} />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

