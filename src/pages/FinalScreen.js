import "./style.css";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectScore } from "../store/questionsPage/questionSelectors";
import { BonusModal } from "../components/BonusModal";
import { bonusModalSHow } from "../store/questionsPage/QuestionSlice";
import { Button } from "react-bootstrap";
import { selectBonusCounter } from "../store/questionsPage/questionSelectors";
import { postHighScore } from "../store/questionsPage/QuestionActions";
import { useState } from "react";
import { setHighScoreModal } from "../store/questionsPage/QuestionSlice";
import { HighScoreModal } from "../components/HighScoreModal";
import { selectSubmitted } from "../store/appState/selectors";
import { checkSubmitted } from "../store/appState/slice";

const FinalScreen = () => {
  const finalScore = useSelector(selectScore);
  const dispatch = useDispatch();
  const bCounter = useSelector(selectBonusCounter);
  const submit = useSelector(selectSubmitted);

  const clickBonus = () => {
    if (bCounter < 1) {
      dispatch(bonusModalSHow());
    }
  };

  return (
    <div className="page-container">
      <HighScoreModal score={finalScore} />
      <BonusModal />
      <h3>Your Score : </h3>
      <div className="score-wrapper">{finalScore}</div>
      <div className="row">
        <div className="col">
          <Link to="/">
            <ButtonComponent label="Replay" />
          </Link>
        </div>
        {!submit ? (
          <div className="col">
            <ButtonComponent
              label="Submit"
              handleOnClick={() => {
                dispatch(setHighScoreModal());
              }}
            />
          </div>
        ) : (
          ""
        )}
        <div className="col">
          <Button onClick={clickBonus}>Trick or Treat</Button>
        </div>
      </div>
    </div>
  );
};
export default FinalScreen;
