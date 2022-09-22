import Score from "./Score";
import TopScores from "./TopScores";

const SideBarScore = () => {
  return (
    <>
      <div className="page-container">
        <h2>ScoreBoard</h2>
        <Score />
        <TopScores />
      </div>
    </>
  );
};
export default SideBarScore;
