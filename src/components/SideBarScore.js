import Score from "./Score";
import TopScores from "./TopScores";

const SideBarScore = ({ score }) => {
  return (
    <>
      <div className="page-container">
        <h2>ScoreBoard</h2>
        <Score score={score} />
        <TopScores />
      </div>
    </>
  );
};
export default SideBarScore;
