import Score from "./Score";
import TopScores from "./TopScores";

const SideBarScore = ({ score, highscore }) => {
  return (
    <>
      <div className="page-container">
        <h2>ScoreBoard</h2>
        <Score score={score} />
        <TopScores highScore={highscore} />
      </div>
    </>
  );
};
export default SideBarScore;
