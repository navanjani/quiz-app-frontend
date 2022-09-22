import "./style.css";
import SideBarScore from "../components/SideBarScore";
import Answer from "../components/Answer";
import ButtonComponent from "../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  getHighScore,
} from "../store/questionsPage/QuestionActions";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  selectNewQuestionNumber,
  selectPreviousQuestionsNumber,
  selectQuestions,
  selectScore,
  selectCount,
  selectFinalCount,
  selectPreviousCategories,
  selectNewCategory,
  selectHighScore,
} from "../store/questionsPage/questionSelectors";
import { Button, Row } from "react-bootstrap";
import {
  newPreguntaNumber,
  resetCount,
  setCount,
  setPreviousQuestionsNumber,
  setScore,
  setFinalCount,
  setPreviousCategories,
  newCatNumber,
  setHighScore,
} from "../store/questionsPage/QuestionSlice";
import QuestionCard from "../components/QuestionCard";

const GamePage = () => {
  const { id } = useParams();
  console.log("Question Page with category Id in param", id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions(id));
    dispatch(setPreviousCategories(parseInt(id)));
    dispatch(getHighScore());
    dispatch(getHighScore());
  }, [dispatch, id]);

  const questions = useSelector(selectQuestions);
  const qNumber = useSelector(selectNewQuestionNumber);
  const newNumber = Math.floor(Math.random() * 9 + 1);
  const pNumber = useSelector(selectPreviousQuestionsNumber);
  const score = useSelector(selectScore);
  const count = useSelector(selectCount);
  const finalCountDown = useSelector(selectFinalCount);
  const highScore = useSelector(selectHighScore);
  const categoriesArray = useSelector(selectPreviousCategories);
  const newCategory = useSelector(selectNewCategory);
  const [answered, setAnswered] = useState(false);
  // console.log(newCategory, "new CAt");

  // Set the answered to false when we have a new question
  useEffect(() => {
    setAnswered(false);
  }, [qNumber]);

  const game = () => {
    if (pNumber.includes(qNumber)) {
      // console.log("same number");
      dispatch(newPreguntaNumber(newNumber));
    } else {
      dispatch(newPreguntaNumber(newNumber));
    }
  };

  const handleClick = (answer) => {
    if (!answered) {
      if (answer === true) {
        setPreviousQuestionsNumber(qNumber);
        dispatch(setScore());
        dispatch(setCount());
        dispatch(setFinalCount());
        setTimeout(() => {
          game();
        }, 1000);
      } else {
        setPreviousQuestionsNumber(qNumber);
        dispatch(setCount());
        dispatch(setFinalCount());
        setTimeout(() => {
          game();
        }, 1000);
      }
      setAnswered(true);
    }
  };

  if (finalCountDown >= 12) {
    return <Navigate to="/final" />;
  }

  const round2 = () => {
    if (categoriesArray.includes(parseInt(newCategory))) {
      dispatch(newCatNumber(Math.floor(Math.random() * 3 + 1))); //bug does not give out new random number
    } else {
      dispatch(resetCount());
      dispatch(fetchQuestions(newCategory));
      dispatch(setPreviousCategories(parseInt(newCategory)));
    }
  };

  return (
    <div className="container container-wrapper">
      <div className="row">
        <div className="col-md-4">
          <SideBarScore score={score} highscore={highScore} />
        </div>
        <div className="col">
          <div className=" page-container">
            <h1>Game Quiz</h1>
            <div className="row">
              <div>
                {count < 6 ? (
                  <div>
                    <QuestionCard question={questions[qNumber]?.question} />
                    <Row>
                      {questions &&
                        questions[qNumber]?.answers.map((answer) => (
                          <Answer
                            answered={answered}
                            answer={answer}
                            key={answer.id}
                            onClickHandler={handleClick}
                          />
                        ))}
                    </Row>
                  </div>
                ) : (
                  <ButtonComponent
                    label="Round Two"
                    handleOnClick={() => {
                      round2();
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GamePage;
