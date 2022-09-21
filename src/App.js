import "./App.css";
import { Routes, Route } from "react-router-dom";

import {HomePage} from "./pages/HomePage";
import {QuizQuestions} from "./components/QuizQuestions";


import FinalScreen from "./pages/FinalScreen";


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<HomePage/>} />
          <Route path={`/questions/:id`} element={<QuizQuestions/>} />

       
        <Route path="/final" element={<FinalScreen />} />

      </Routes>
    </div>
  );
}

export default App;
