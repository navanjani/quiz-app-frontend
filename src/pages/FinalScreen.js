import "./style.css";
import ButtonComponent from "../components/ButtonComponent";
const FinalScreen = () => {
  return (
    <div className="page-container">
      <h3>Your Score : </h3>
      <div className="score-wrapper">50</div>
      <div className="row">
        <div className="col">
          <ButtonComponent label="Replay" />
        </div>
        <div className="col">
          <ButtonComponent label="Submit" />
        </div>
      </div>
    </div>
  );
};
export default FinalScreen;
