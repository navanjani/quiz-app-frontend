import { Modal, Button, Card } from "react-bootstrap";
import {
  bonusModalSHow,
  bonusQuestion,
  newCatNumber,
} from "../store/questionsPage/QuestionSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "../store/questionsPage/QuestionActions";
import {
  selectNewCategory,
  selectPreviousCategories,
} from "../store/questionsPage/questionSelectors";
import {
  selectQuestions,
  selectNewQuestionNumber,
  selectBonusModal,
} from "../store/questionsPage/questionSelectors";
import { useEffect } from "react";

export const BonusModal = () => {
  const show = useSelector(selectBonusModal);
  const dispatch = useDispatch();
  const cat = useSelector(selectNewCategory);
  const question = useSelector(selectQuestions);
  const qNumber = useSelector(selectNewQuestionNumber);
  const categoriesArray = useSelector(selectPreviousCategories);

  useEffect(() => {
    if (categoriesArray.includes(parseInt(cat))) {
      dispatch(newCatNumber(Math.floor(Math.random() * 3 + 1)));
    } else {
      dispatch(fetchQuestions(cat));
    }
  }, []);

  const handleClick = (answer) => {
    if (answer === true) {
      dispatch(bonusQuestion(-20));
      dispatch(bonusModalSHow());
    } else {
      dispatch(bonusQuestion(20));
      dispatch(bonusModalSHow());
    }
  };
  return (
    <>
      <Modal show={show} animation={true}>
        <Modal.Header>
          <Modal.Title>
            If you get it right you get +20 if wrong -20
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Title>{question[qNumber]?.question}</Card.Title>
            <br />
            <Card.Body>
              {question[qNumber]?.answers.map((ans, i) => {
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
              })}
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
