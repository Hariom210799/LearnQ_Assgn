import React, { useEffect } from "react";
import Questionaire from "./Questionaire";
import SelectDiffculty from "./SelectDiffculty";
import dataSet from "../api/dataSet";

function MainPage() {
  const [param, setParam] = React.useState("");
  const [data, setData] = React.useState(dataSet);
  const [started, setStarted] = React.useState(false);

  const setDifficulty = (value) => {
    console.log("VALUE:", value);
    setParam(value);
    filterData();
  };

  const setFiltered = (value) => {
    setData(value);
  };

  useEffect(() => {}, []);

  const filterData = () => {
    let temp = dataSet;
    if (param !== "") {
      temp = temp.filter((e) => e.difficulty_level === param);
      const shuffled = temp.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 4);
      setFiltered(selected);
    } else {
      const shuffled = temp.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 4);
      setFiltered(selected);
    }
    console.log("Filtered Data:", data);
  };

  return (
    <div style={{ flexDirection: "row" }}>
      <div
        style={{
          flex: 1,
          height: "100%",
          width: "30%",
          float: "left",
          backgroundColor: "#ff7f50",
        }}
      >
        <SelectDiffculty
          setDifficulty={setDifficulty}
          setStarted={setStarted}
          started={started}
        />
      </div>
      <div
        style={{
          flex: 1,
          height: "100%",
          width: "70%",
          float: "right",
          //   backgroundColor: "grey",
        }}
      >
        {started ? (
          <Questionaire value={param} data={data} />
        ) : (
          <div style={{ textAlign: "center", marginTop: "25%" }}>
            <h2>Welcome to Math Quiz !!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPage;
