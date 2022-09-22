
const QuestionCard = () => {
  return (
    <div className="question-wrapper">
      <p>Question</p>

const QuestionCard = ({ question }) => {
  return (
    <div className="question-wrapper">
      <h5>{question}</h5>

    </div>
  );
};
export default QuestionCard;
