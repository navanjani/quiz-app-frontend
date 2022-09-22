const TopScores = ({ highScore }) => {
  return (
    <div className="top-score-wrapper">
      <ul style={{ listStyle: "none" }}>
        {highScore
          ? highScore.map((hc, i) => {
              return (
                <li key={i}>
                  <h3>
                    {hc.name}: {hc.score}{" "}
                  </h3>
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};
export default TopScores;
