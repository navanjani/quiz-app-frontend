import "./style.css";

import { useState } from "react";
const Answer = ({ answer, answered, onClickHandler }) => {
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);

  const handleOnClick = (correct) => {
    if (!answered) {
      if (correct) {
        setCorrect(true);
      } else {
        setWrong(true);
      }
    }
    onClickHandler(correct);
  };

  return (
    <div className="col-md-6" onClick={() => handleOnClick(answer.correct)}>
      <div
        className={`answer-wrapper border-gradient-green 
        ${answered ? (answer.correct ? "correct-answer" : "wrong-answer") : ""}
        ${answered ? (correct ? "correct-animate" : "") : ""}
        ${answered ? (wrong ? "wrong-animate" : "") : ""}`}
      >
        {answer.answer}
      </div>

    </div>
  );
};
export default Answer;
