import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryId/questions" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
