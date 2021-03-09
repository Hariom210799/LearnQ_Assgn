import React from "react";
import dataSet from "../api/dataSet";
// import QuizArea from "../components/QuizArea";
// import ScoreArea from "../components/ScoreArea";
import Answer from "../components/Answer";
import { Pagination, Button } from "semantic-ui-react";
import ScoreArea from "../components/ScoreArea";

function Questionaire(props) {
  // let par = props.value;
  const data = props.data;
  const [activePage, setActivePage] = React.useState(1);
  const [current, setCurrent] = React.useState(0);
  // const [data, setData] = React.useState(dataSet);
  const [correct, setCorrect] = React.useState(0);
  const [incorrect, setInCorrect] = React.useState(0);
  const [isFinished, setIsFinished] = React.useState(false);

  const handleClick = (choice) => {
    if (choice === data[current].correct - 1) {
      if (data[current].marks === 0) data[current].marks += 1;
    } else {
      if (data[current].marks === 1) data[current].marks -= 1;
    }

    if (data[current].marks === 1) {
      setCorrect(correct + data[current].marks);
    } else {
      setCorrect(correct);
    }
  };

  return (
    <div style={{ margin: "10%" }}>
      {isFinished === false ? (
        <div>
          <h1 className="question">
            {activePage}. {data[activePage - 1].question}
          </h1>
          {/* <div style={{ marginTop: "20%" }}>{options}</div> */}
          <div>
            {data[activePage - 1].option.map((item, index) => (
              <Answer
                key={index}
                choice={index}
                handleClick={handleClick}
                answer={item}
              />
            ))}
          </div>

          {activePage === 4 ? (
            <Button
              content="FINISH TEST"
              onClick={() => setIsFinished(true)}
              // onKeyPress={this.handleKeyPress}
            />
          ) : (
            <></>
          )}
          <div style={{ marginTop: "10%" }}>
            <Pagination
              defaultActivePage={activePage}
              boundaryRange={2}
              onPageChange={(e, { activePage }) => setActivePage(activePage)}
              // size="mini"
              siblingRange={0}
              totalPages={4}
              // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
              ellipsisItem={null}
              firstItem={null}
              lastItem={null}
              prevItem={undefined}
              nextItem={undefined}
            />
          </div>
        </div>
      ) : (
        <div>
          <ScoreArea correct={correct} />
        </div>
      )}
    </div>
  );
}

export default Questionaire;
