import React, { useState } from "react";
import DragItem from "./components/drag-item";
import DropItem from "./components/drop-item";
import { List } from "./data";
import "./styles.css";

function App() {
  const [todoValues, setValue] = useState(List);
  return (
    <div className="App">
      <div className="box">
        <DropItem
          heading="LastingSales"
          onDrop={(id) => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "list";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map((key) => ({ id: key, ...todoValues[key] }))
            .filter((todo) => todo.state === "list")
            .map((todo) => (
              <DragItem id={todo.id} data={todo} key={todo.id} />
            ))}
        </DropItem>
        <DropItem
          heading="Marketing"
          onDrop={(id) => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "wip";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map((key) => ({ id: key, ...todoValues[key] }))
            .filter((todo) => todo.state === "wip")
            .map((todo) => (
              <DragItem id={todo.id} data={todo} key={todo.id} />
            ))}
        </DropItem>
        <DropItem
          heading="Business"
          onDrop={(id) => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "done";
            setValue({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map((key) => ({ id: key, ...todoValues[key] }))
            .filter((todo) => todo.state === "done")
            .map((todo) => (
              <DragItem id={todo.id} data={todo} key={todo.id} />
            ))}
        </DropItem>
      </div>
    </div>
  );
}

export default App;
