import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
<<<<<<< HEAD
import GamePage from "./pages/GamePage";
=======
import SideBarScore from "./components/SideBarScore";
>>>>>>> ce84029 (bonus question added)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/questions/:id`} element={<GamePage />} />

        <Route path="/final" element={<FinalScreen />} />
      </Routes>
=======
      <SideBarScore />
      <div style={{ marginLeft: "200px", padding: "1x 16px", height: "100%" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questions/:id" element={<QuizQuestions />} />
          <Route path="/final" element={<FinalScreen />} />
        </Routes>
      </div>
>>>>>>> ce84029 (bonus question added)
    </div>
  );
}

export default App;
