import React from "react";
import TotalCorrect from "./TotalCorrect";
import TotalIncorrect from "./TotalIncorrect";

function ScoreArea(props) {
  return (
    <div className="scoreWrapper">
      <h3>Percentage Scored : {(props.correct / 4) * 100} %</h3>
    </div>
  );
}

export default ScoreArea;
