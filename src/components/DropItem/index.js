import React, { useRef } from "react";
import View from "./layout";

import useDrop from "../../hooks/useDrop";
// eslint-disable-next-line
export default ({ children, heading, onDrop }) => {
  const dropRef = useRef();
  // eslint-disable-next-line
  const { dropState, droppedItem } = useDrop({
    ref: dropRef,
    onDrop,
  });
  return (
    <View ref={dropRef} heading={heading} droppedItem={droppedItem}>
      {children}
    </View>
  );
};
