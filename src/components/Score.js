import "./style.css";
import { useSelector } from "react-redux";
import { selectScore } from "../store/questionsPage/questionSelectors";
const Score = () => {
  const score = useSelector(selectScore);
  return (
    <div className="score-wrapper">
      <h4>YOUR SCORE</h4>
      <h3>{score}</h3>
    </div>
  );
};
export default Score;
