import { useState, useEffect } from "react";

const useDrop = ({ ref, onDrop }) => {
  const [dropState, updateDropState] = useState("droppable");
  const dropOver = (e) => {
    e.preventDefault();
    updateDropState("dragging over");
  };

  const drop = (e) => {
    e.preventDefault();
    onDrop(e.dataTransfer.getData("source"));
    updateDropState("dropped");
  };
  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      elem.addEventListener("dragover", dropOver);
      elem.addEventListener("drop", drop);
      return () => {
        elem.removeEventListener("dragover", dropOver);
        elem.removeEventListener("drop", drop);
      };
    }
  });
  return {
    dropState,
  };
};

export default useDrop;
