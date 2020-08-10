import React, { useRef } from 'react';
import ConnectPointsWrapper from '../ConnectPointsWrapper';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid grey;
  position: relative;
  padding: 20px 30px;
  margin: 10px 0;
  border-radius: 4px;
  width: 150px;
`

export default function Box({ text, handler, addArrow, boxId, customBox, isRequired, ...props }) {
  const ref0 = useRef()

  const onDrop = (e) => {
    if (e.dataTransfer.getData("arrow") === boxId) {
      return
    } else {
      if (boxId.includes('default')) return

      const refs = { start: e.dataTransfer.getData("arrow"), end: boxId }
      addArrow(refs)
    }
  }

  const BoxLayout = customBox ? customBox : Container

  return (
    <BoxLayout
      id={boxId}
      ref={ref0}
      onDragOver={e => e.preventDefault()}
      onDrop={onDrop}>
      {text} {isRequired ? '*' : ''}
      <ConnectPointsWrapper {...{ boxId, handler, ref0, ...props }} />
    </BoxLayout>
  );
}
