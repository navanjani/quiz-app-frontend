import "./style.css";
<<<<<<< HEAD
const Score = ({ score }) => {
  return (
    <div className="score-wrapper">
      <h3>Your score : {score}</h3>
=======
import { useSelector } from "react-redux";
import { selectScore } from "../store/questionsPage/questionSelectors";
const Score = () => {
  const score = useSelector(selectScore);
  return (
    <div className="score-wrapper">
      <h4>YOUR SCORE</h4>
      <h3>{score}</h3>
>>>>>>> ce84029 (bonus question added)
    </div>
  );
};
export default Score;
