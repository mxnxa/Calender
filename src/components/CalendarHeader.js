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
    font-size: 30px;
    font-weight: 700;
    margin: 0 30px;
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

function CalendarHeader() {
  return (
    <HeaderBlock>
      <BtnBlock>
        <FaAngleLeft />
      </BtnBlock>
      <p>2022년 6월</p>
      <BtnBlock>
        <FaAngleRight />
      </BtnBlock>
    </HeaderBlock>
  );
}

export default CalendarHeader;
