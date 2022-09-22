import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/questions/:id`} element={<GamePage />} />

        <Route path="/final" element={<FinalScreen />} />
      </Routes>
    </div>
  );
}

export default App;
