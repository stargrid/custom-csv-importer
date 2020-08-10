import React, { useRef, useState } from "react";
import Xarrow from "react-xarrows";

const connectPointStyle = {
  position: "absolute",
  width: 15,
  height: 15,
  borderRadius: "50%",
  background: "black"
};
const connectPointOffset = {
  left: { left: 0, top: "50%", transform: "translate(-50%, -50%)" },
  right: { left: "100%", top: "50%", transform: "translate(-50%, -50%)" },
  top: { left: "50%", top: 0, transform: "translate(-50%, -50%)" },
  bottom: { left: "50%", top: "100%", transform: "translate(-50%, -50%)" }
};

export default function ConnectPointsWrapper({ boxId, handler, ref0, ...props }) {
  const ref1 = useRef()

  const [position, setPosition] = useState({})
  const [beingDragged, setBeingDragged] = useState(false)

  return (
    <>
      <div
        className="connectPoint"
        style={{
          ...connectPointStyle,
          ...connectPointOffset[handler],
          ...position
        }}
        draggable={handler === 'right' || handler === 'bottom'}
        onDragStart={e => {
          setBeingDragged(true);
          e.dataTransfer.setData("arrow", boxId);
        }}
        onDrag={e => {
          setPosition({
            position: "fixed",
            left: e.clientX,
            top: e.clientY,
            transform: "none",
            opacity: 0
          });
        }}
        ref={ref1}
        onDragEnd={e => {
          setPosition({});
          setBeingDragged(false);
        }}
      />

      { beingDragged ? 
          <Xarrow 
            color={'#8652e3'}
            headSize={5}
            strokeWidth={4}
            start={ref0}
            end={ref1}
            {...props}
          /> 
        : null
      }
    </>
  );
};