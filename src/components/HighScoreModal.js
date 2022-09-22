import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { postHighScore } from "../store/questionsPage/QuestionActions";
import { setHighScoreModal } from "../store/questionsPage/QuestionSlice";
import { selectHScoreModalState } from "../store/questionsPage/questionSelectors";
import { useSelector, useDispatch } from "react-redux";

export const HighScoreModal = ({ score }) => {
  const show = useSelector(selectHScoreModalState);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const postScore = () => {
    const newHighScore = { name, score };
    dispatch(postHighScore(newHighScore));
    dispatch(setHighScoreModal());
  };
  return (
    <>
      <Modal show={show}>
        <Modal.Header>Submit your HighScore</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                value={name}
                type="name"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Button onClick={postScore} variant="outline-dark">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
