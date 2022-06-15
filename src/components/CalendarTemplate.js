import React from "react";
import styled from "styled-components";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ddeedd;
`;

const CalendarBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);
`;

function CalendarTemplate() {
  return (
    <Positioner>
      <CalendarBlock>
        <CalendarHeader />
        <CalendarBody />
      </CalendarBlock>
    </Positioner>
  );
}

export default CalendarTemplate;
