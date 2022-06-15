import React from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const HeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  border-bottom: 2px solid #f0efef;

  p {
    width: 210px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  }
`;

const BtnBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 5px;
  border-radius: 4px;
  color: #fff;
  background-color: #c5d5c5;
  cursor: pointer;
`;

function CalendarHeader({ currentTargets, decreaseMonth, increaseMonth }) {
  const { year, month } = currentTargets;

  return (
    <HeaderBlock>
      <BtnBlock onClick={decreaseMonth}>
        <FaAngleLeft />
      </BtnBlock>
      {/* month는 0 부터 시작 => 원하는 월을 출력하려면 +1 */}
      <p>
        {year}년 {month + 1}월
      </p>
      <BtnBlock onClick={increaseMonth}>
        <FaAngleRight />
      </BtnBlock>
    </HeaderBlock>
  );
}

export default CalendarHeader;
