import React, { useState, useRef } from "react";
import "../../App.css";
import useDrag from "../../hooks/useDrag";
import View from "./layout";

// eslint-disable-next-line
export default ({ dragEffect, data, id }) => {
  const dragRef = useRef();
  const [classValue, setClassValue] = useState("grab");
  // eslint-disable-next-line
  const { dragState } = useDrag({
    id,
    effect: dragEffect,
    ref: dragRef,
    onDragStart: () => setClassValue("grabbing"),
    onDragEnd: () => setClassValue("grab"),
  });
  return <View ref={dragRef} data={data} classValue={classValue} />;
};
