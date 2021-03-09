import React from "react";
import Answer from "./Answer";

function Answerlist(props) {
  const option = [];
  for (let i = 0; i < props.dataSet.option.length; i++) {
    option.push(
      <Answer
        key={i}
        choice={i}
        handleClick={props.handleClick}
        answer={props.dataSet.option[i]}
      />
    );
  }
  return <div>{option}</div>;
}

export default Answerlist;
