import React from "react";
import Xarrow from "react-xarrows";
import Box from "./components/Box";
import styled from 'styled-components';
import "./styles.css";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`

const defaultCsvMock = [{ column_id: 1, column_name: 'Default Item 1', required: true, }, { column_id: 2, column_name: 'Default Item 2', required: false, }]
const userCsvMock = [{ column_id: 1, column_name: 'User Item 1' }, { column_id: 2, column_name: 'User Item 2' }]

export default function App({ 
  arrows = [],
  setArrows,
  defaultCsvTitle = 'Default CSV',
  userCsvTitle = 'User CSV',
  defaultCsv = defaultCsvMock,
  userCsv = userCsvMock,
  ...props }) {

  const addArrow = ({ start, end }) => {
    arrows.forEach((item, index) => {
      if (item.start === start || item.end === end) {
        arrows.splice(index, 1)
        return
      }
    })

    setArrows([...arrows, { start, end }])
  };

  const removeArrow = ({ start, end }) => {
    arrows.forEach((item, index) => {
      if (item.start === start && item.end === end) {
        arrows.splice(index, 1)
        return
      }
    })

    setArrows([...arrows])
  }
  
  return (
    <Container>
      <Items>
        <Title>{ defaultCsvTitle }</Title>
        {
          defaultCsv.map((item, index) => (
            <Box
              key={index}
              text={item.column_name}
              addArrow={addArrow}
              handler={'right'}
              boxId={`default-${item.column_id}`}
              isRequired={item.required}
              {...props}
            />
          ))
        }
      </Items>

      <Items>
        <Title>{ userCsvTitle }</Title>
        {
          userCsv.map((item, index) => (
            <Box
              key={index}
              text={item.column_name}
              addArrow={addArrow}
              handler={'left'}
              boxId={`user-${item.column_id}`}
              {...props}
            />
          ))
        }
      </Items>

      {arrows.map((ar, index) => (
        <div onClick={() => removeArrow(ar)} key={index} style={{ position: 'absolute' }}>
          <Xarrow
            color={'#8652e3'}
            headSize={5}
            strokeWidth={4}
            start={ar.start}
            end={ar.end}
            {...props}
          />
        </div>
      ))}
    </Container>
  );
}

