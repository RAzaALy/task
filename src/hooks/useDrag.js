// eslint-disable-next-line
import { useState, useCallback, useEffect, useRef } from "react";

const useDrag = ({ id, effect, ref, onDragStart, onDragOver, onDragEnd }) => {
  const [dragState, updateDragState] = useState("draggable");
  const dragStart = (e) => {
    updateDragState("dragStart");
    e.dataTransfer.dropEffect = effect;
    e.dataTransfer.setData("source", id);
    onDragStart && onDragStart();
  };
  const dragOver = (e) => {
    updateDragState("dragging");
    onDragOver && onDragOver();
  };

  const dragEnd = (e) => {
    updateDragState("draggable");
    // if (effect === "move") {
    //   updateDragState("moved");
    // }
    onDragEnd && onDragEnd();
  };
  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      elem.setAttribute("draggable", true);
      elem.addEventListener("dragstart", dragStart);
      elem.addEventListener("dragover", dragOver);
      elem.addEventListener("dragend", dragEnd);
      //cleanup function:
      return () => {
        elem.removeEventListener("dragstart", dragStart);
        elem.removeEventListener("dragover", dragOver);
        elem.removeEventListener("dragend", dragEnd);
      };
    }
    // eslint-disable-next-line
  }, []);
  return {
    dragState: dragState,
  };
};

export default useDrag;
