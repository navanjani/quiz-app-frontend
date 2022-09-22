import Score from "./Score";
import TopScores from "./TopScores";

const SideBarScore = ({ score }) => {
  return (
    <>
      <div
        className="page-container"
        style={{
          margin: "0",
          padding: "0",
          width: "200px",
          backgroundColor: "floralwhite",
          position: "fixed",
          height: "100%",
          overflow: "auto",
        }}
      >
        <h2>ScoreBoard</h2>
        <Score score={score} />
        <TopScores />
      </div>
    </>
  );
};
export default SideBarScore;
