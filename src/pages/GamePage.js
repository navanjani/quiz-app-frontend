import "./style.css";
import SideBarScore from "../components/SideBarScore";
import Answer from "../components/Answer";
import ButtonComponent from "../components/ButtonComponent";
import QuestionCard from "../components/QuestionCard";

const GamePage = () => {
  return (
    <div className="container container-wrapper">
      <div className="row">
        <div className="col-md-4">
          <SideBarScore />
        </div>
        <div className="col">
          <div className=" page-container">
            <h1>Game Quiz</h1>
            <QuestionCard />
            <div className="row">
              <Answer />
              <Answer />
              <Answer />
              <Answer />
            </div>
            <div className="button-wrapper">
              <ButtonComponent label="Next Question" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GamePage;
