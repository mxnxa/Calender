import React from "react";
import styled, { css } from "styled-components";

const DateNum = styled.p`
  font-family: "Quicksand-Medium";
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
      border-radius: 5px;
      ${DateNum} {
        color: #fff;
        font-weight: 700;
        background-color: #c5d5c5;
      }
    `}
`;

function CalendarDay({
  renderDate,
  renderYear,
  renderMonth,
  isCurrentMonth,
  onClickDate,
  selectedTargets,
}) {
  const isCurrent =
    // selectedTargets : 선택(클릭)한 날짜
    // curretnTargets : 현재 화면에 렌더링 되고 있는 날짜
    selectedTargets.year === renderYear &&
    selectedTargets.month === renderMonth;

  return (
    <DateBlock
      isCurrentMonth={isCurrentMonth}
      active={renderDate === selectedTargets.date && isCurrent}
      onClick={() => {
        // 이번 달이 아니면 이벤트 발생 x => onClickDate(date) 실행 x
        if (!isCurrentMonth) return;
        onClickDate({
          year: renderYear,
          month: renderMonth,
          date: renderDate,
        });
      }}
    >
      <DateNum>{renderDate}</DateNum>
    </DateBlock>
  );
}

export default CalendarDay;
