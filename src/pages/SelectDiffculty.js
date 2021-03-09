import React from "react";
import { Button } from "semantic-ui-react";

function SelectDiffculty(props) {
  const Start = () => {
    props.setStarted(true);
  };

  return (
    <div
      style={{
        flexDirection: "column",
        margin: "10%",
      }}
    >
      <h2>Select Difficulty Here</h2>
      <div style={{ margin: "20%", flexDirection: "column" }}>
        <Button
          animated="fade"
          style={{ margin: 5 }}
          onClick={() => props.setDifficulty("Easy")}
        >
          <Button.Content visible>Level - 1</Button.Content>
          <Button.Content hidden>EASY</Button.Content>
        </Button>
        <Button
          animated="fade"
          style={{ margin: 5 }}
          onClick={() => props.setDifficulty("Medium")}
        >
          <Button.Content visible>Level - 2</Button.Content>
          <Button.Content hidden>MEDIUM</Button.Content>
        </Button>
        <Button
          animated="fade"
          style={{ margin: 5 }}
          onClick={() => props.setDifficulty("Hard")}
        >
          <Button.Content visible>Level - 3</Button.Content>
          <Button.Content hidden>DIFFICULT</Button.Content>
        </Button>
        <Button
          animated="fade"
          style={{ margin: 5 }}
          onClick={() => props.setDifficulty("")}
        >
          <Button.Content visible>Level - 4</Button.Content>
          <Button.Content hidden>ANY</Button.Content>
        </Button>
        <Button
          labelPosition="right"
          positive
          content="START"
          onClick={() => Start()}
          icon="arrow alternate circle right outline"
          style={{ margin: 5, marginLeft: 0 }}
        />
        <Button
          negative
          content="CLOSE"
          icon="close"
          onClick={() => props.setStarted(false)}
          style={{ margin: 5, marginLeft: 0 }}
        />
      </div>
    </div>
  );
}

export default SelectDiffculty;
