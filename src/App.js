import './App.css';
import { Routes, Route } from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {QuizQuestions} from "./components/QuizQuestions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
          <Route path={`/questions/:id`} element={<QuizQuestions/>} />
      </Routes>
    </div>
  );
}

export default App;
