import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../store/questionsPage/QuestionActions";
import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import {
  selectNewQuestionNumber,
  selectPreviousQuestionsNumber,
  selectQuestions,
  selectCount,
  selectFinalCount,
  selectPreviousCategories,
  selectNewCategory,
} from "../store/questionsPage/questionSelectors";
import { Card, Button } from "react-bootstrap";
import {
  newPreguntaNumber,
  resetCount,
  setCount,
  setPreviousQuestionsNumber,
  setScore,
  setFinalCount,
  setPreviousCategories,
  newCatNumber,
} from "../store/questionsPage/QuestionSlice";

export const QuizQuestions = () => {
  const { id } = useParams();
  console.log("Question Page with category Id in param", id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions(id));
    dispatch(setPreviousCategories(id));
  }, [dispatch, id]);

  const questions = useSelector(selectQuestions);
  const qNumber = useSelector(selectNewQuestionNumber);
  const newNumber = Math.floor(Math.random() * 9 + 1);
  const pNumber = useSelector(selectPreviousQuestionsNumber);
  const count = useSelector(selectCount);
  const finalCountDown = useSelector(selectFinalCount);
  const categoriesArray = useSelector(selectPreviousCategories);
  const newCategory = useSelector(selectNewCategory);
  // console.log(newCategory, "new CAt");

  const game = () => {
    if (pNumber.includes(qNumber)) {
      // console.log("same number");
      dispatch(newPreguntaNumber(newNumber));
    } else {
      dispatch(newPreguntaNumber(newNumber));
    }
  };

  const handleClick = (answer) => {
    if (answer === true) {
      setPreviousQuestionsNumber(qNumber);
      dispatch(setScore());
      dispatch(setCount());
      dispatch(setFinalCount());
      game();
    } else {
      setPreviousQuestionsNumber(qNumber);
      dispatch(setCount());
      dispatch(setFinalCount());
      game();
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
    }
  };

  // console.log("score", score);
  // console.log("count", count);
  // console.log("catArray", categoriesArray);
  console.log(newCategory, "hi");

  return (
    <>
      {count < 6 ? (
        <Card>
          <Card.Title>{questions[qNumber]?.question}</Card.Title>
          {questions
            ? questions[qNumber]?.answers.map((ans, i) => {
                return (
                  <Button
                    key={i}
                    variant={"outline-secondary"}
                    onClick={() => {
                      handleClick(ans.correct);
                    }}
                  >
                    {ans.answer}
                  </Button>
                );
              })
            : " "}
        </Card>
      ) : (
        <Button onClick={round2}>Round 2</Button>
      )}
    </>
  );
};
