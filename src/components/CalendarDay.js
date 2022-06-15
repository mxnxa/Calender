import React from "react";
import styled, { css } from "styled-components";

const DateNum = styled.p`
  font-family: "Quicksand-Regular";
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: inherit;
  margin: 0;
`;

const DateBlock = styled.div`
  cursor: pointer;

  ${({ isCurrentMonth }) =>
    !isCurrentMonth &&
    css`
      color: lightgray !important;
    `}

  ${({ active }) =>
    active &&
    css`
      ${DateNum} {
        color: #fff;
        font-weight: 700;
        background-color: #c5d5c5;
      }
    `}
`;

function CalendarDay({ firstDate, isCurrentMonth, date, onClickDate }) {
  return (
    <DateBlock
      isCurrentMonth={isCurrentMonth}
      active={firstDate === date && isCurrentMonth}
      onClick={() => {
        // 이번 달이 아니면 이벤트 발생 x => onClickDate(date) 실행 x
        if (!isCurrentMonth) return;
        onClickDate(firstDate);
      }}
    >
      <DateNum>{firstDate}</DateNum>
    </DateBlock>
  );
}

export default CalendarDay;
