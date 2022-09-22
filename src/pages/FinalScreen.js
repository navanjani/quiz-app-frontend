import "./style.css";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectScore } from "../store/questionsPage/questionSelectors";
import { BonusModal } from "../components/BonusModal";
import { bonusModalSHow } from "../store/questionsPage/QuestionSlice";
import { Button } from "react-bootstrap";
import { selectBonusCounter } from "../store/questionsPage/questionSelectors";
const FinalScreen = () => {
  const score = useSelector(selectScore);
  const dispatch = useDispatch();
  const bCounter = useSelector(selectBonusCounter);

  const clickBonus = () => {
    if (bCounter < 1) {
      dispatch(bonusModalSHow());
    }
  };

  return (
    <div className="page-container">
      <BonusModal />
      <h3>Your Score : </h3>
      <div className="score-wrapper">{score}</div>
      <div className="row">
        <div className="col">
          <Link to="/">
            <ButtonComponent label="Replay" />
          </Link>
        </div>
        <div className="col">
          <ButtonComponent label="Submit" />
        </div>
        <div className="col">
          <Button onClick={clickBonus}>Trick or Treat</Button>
        </div>
      </div>
    </div>
  );
};
export default FinalScreen;
