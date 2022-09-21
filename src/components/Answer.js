import "./style.css";
const Answer = ({ answer, onClickHandler }) => {
  return (
    <div className="col-md-6" onClick={() => onClickHandler(answer.correct)}>
      <div className="answer-wrapper border-gradient-green">
        {answer.answer}
      </div>
    </div>
  );
};
export default Answer;
