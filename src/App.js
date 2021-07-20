import React, { useState } from "react";
import DragItem from "./components/drag-item";
import DropItem from "./components/drop-item";
import { List } from "./data";
import "./styles.css";

function App() {
  const [listValue, setValue] = useState(List);

  return (
    <div className="App">
      <div className="box">
        <DropItem
          heading="LastingSales"
          onDrop={(id) => {
            const currentList = { ...listValue[id] };
            currentList.state = "list";
            setValue({ ...listValue, ...{ [id]: currentList } });
          }}
        >
          {Object.keys(listValue)
            .map((key) => ({ id: key, ...listValue[key] }))
            .filter((list) => list.state === "list")
            .map((list) => (
              <DragItem id={list.id} data={list} key={list.id} />
            ))}
        </DropItem>
        <DropItem
          heading="Marketing"
          onDrop={(id) => {
            const currentList = { ...listValue[id] };
            currentList.state = "mark";
            setValue({ ...listValue, ...{ [id]: currentList } });
          }}
        >
          {Object.keys(listValue)
            .map((key) => ({ id: key, ...listValue[key] }))
            .filter((list) => list.state === "mark")
            .map((list) => (
              <DragItem id={list.id} data={list} key={list.id} />
            ))}
        </DropItem>
        <DropItem
          heading="Business"
          onDrop={(id) => {
            const currentList = { ...listValue[id] };
            currentList.state = "bus";
            setValue({ ...listValue, ...{ [id]: currentList } });
          }}
        >
          {Object.keys(listValue)
            .map((key) => ({ id: key, ...listValue[key] }))
            .filter((list) => list.state === "bus")
            .map((list) => (
              <DragItem id={list.id} data={list} key={list.id} />
            ))}
        </DropItem>
      </div>
    </div>
  );
}

export default App;
