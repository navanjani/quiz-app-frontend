import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { QuizQuestions } from "./components/QuizQuestions";
import FinalScreen from "./pages/FinalScreen";
import SideBarScore from "./components/SideBarScore";

function App() {
  return (
    <div className="App">
      <SideBarScore />
      <div style={{ marginLeft: "200px", padding: "1x 16px", height: "100%" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questions/:id" element={<QuizQuestions />} />
          <Route path="/final" element={<FinalScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
