import React, { useState } from "react";
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

const today = new Date();
const initialDate = {
  year: today.getFullYear(),
  month: today.getMonth(),
  date: today.getDate(),
};

function CalendarTemplate() {
  const [currentTargets, setCurrentTargets] = useState(initialDate);
  const { year, month, date } = currentTargets;

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

  const onClickDate = (date) => {
    setCurrentTargets({
      ...currentTargets,
      date,
    });
  };

  return (
    <Positioner>
      <CalendarBlock>
        <CalendarHeader
          year={year}
          month={month}
          currentTargets={currentTargets}
          decreaseMonth={decreaseMonth}
          increaseMonth={increaseMonth}
        />
        <CalendarBody
          currentTargets={currentTargets}
          onClickDate={onClickDate}
        />
      </CalendarBlock>
    </Positioner>
  );
}

export default CalendarTemplate;
