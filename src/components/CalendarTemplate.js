import React, { useState } from "react";
import styled from "styled-components";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";

const Positioner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddeedd;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalendarBlock = styled.div`
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);
`;

const GoTodayBtn = styled.button`
  /* width: 50px; */
  padding: 3px;
  /* border: none; */
  /* border-radius: 5px; */
  /* color: #fff; */
  /* background: #9fa9a3; */
  /* background: none; */
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s;

  /* &:hover {
    color: #e50914;
    background-color: rgba(255, 255, 255, 0.8);
  } */
`;

const today = new Date();
const initialDate = {
  year: today.getFullYear(),
  month: today.getMonth(),
  date: today.getDate(),
};

function CalendarTemplate() {
  const [currentTargets, setCurrentTargets] = useState(initialDate);
  const { year, month } = currentTargets;

  const [selectedTargets, setSelectedTargets] = useState(initialDate);

  const decreaseMonth = () => {
    if (month > 0) {
      setCurrentTargets({
        ...currentTargets,
        month: month - 1,
      });
    } else {
      setCurrentTargets({
        ...currentTargets,
        year: year - 1,
        month: 11,
      });
    }
  };

  const increaseMonth = () => {
    if (month < 11) {
      setCurrentTargets({
        ...currentTargets,
        month: month + 1,
      });
    } else {
      setCurrentTargets({
        ...currentTargets,
        year: year + 1,
        month: 0,
      });
    }
  };

  const onClickDate = (targets) => setSelectedTargets(targets);

  const renderSelectedDate = () => {
    setCurrentTargets(initialDate);
    setSelectedTargets(initialDate);
  };

  return (
    <Positioner>
      <Container>
        <CalendarBlock>
          <CalendarHeader
            currentTargets={currentTargets}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            renderSelectedDate={renderSelectedDate}
          />
          <CalendarBody
            currentTargets={currentTargets}
            selectedTargets={selectedTargets}
            onClickDate={onClickDate}
            renderSelectedDate={renderSelectedDate}
          />
        </CalendarBlock>
        <GoTodayBtn onClick={renderSelectedDate}>오늘</GoTodayBtn>
      </Container>
    </Positioner>
  );
}

export default CalendarTemplate;
