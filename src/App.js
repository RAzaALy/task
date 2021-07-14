import React from "react";
import "./App.css";

const App = () => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app">
      <div className="main-container" onDrop={drop} onDragOver={onDragOver}>
        <div
          className="box"
          id="box1"
          onDrop={drop}
          onDragOver={dragOver}
          draggable="true"
          onDragStart={dragStart}
        >
          <div
            className="card"
            id="card1"
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <h1>Card 1</h1>
          </div>
          <div
            className="card"
            id="card2"
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <h1>Card 2</h1>
          </div>
          <div
            className="card"
            id="card3"
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <h1>Card 3</h1>
          </div>
        </div>
        <div
          className="box"
          id="box2"
          onDrop={drop}
          onDragOver={dragOver}
          draggable="true"
          onDragStart={dragStart}
        >
          <div
            className="card"
            id="card4"
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <h1>Card 4</h1>
          </div>
        </div>
        <div
          className="box"
          id="box3"
          onDrop={drop}
          onDragOver={dragOver}
          draggable="true"
          onDragStart={dragStart}
        >
          <div
            className="card"
            id="card5"
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
          >
            <h1>Card 5</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
