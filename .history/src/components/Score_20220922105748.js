import "./style.css";
const Score = ({ score }) => {
  return (
    <div className="score-wrapper">
      <h3>Your score : {score}</h3>
    </div>
  );
};
export default Score;
