import React, { useMemo } from "react";
import styled from "styled-components";

const BodyBlock = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 40px repeat(5, 1fr);
  grid-template-columns: repeat(7, 1fr);
  padding: 0 10px;
`;

const DayLabel = styled.div`
  justify-self: center;
  align-self: center;
  font-weight: 700;
  opacity: 0.7;
`;

const dayList = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

function CalendarBody() {
  const lastDate = 30;

  const dateArr = useMemo(() => {
    let result = [];
    for (let i = 1; i <= lastDate; i++) {
      result.push(<p style={{ fontFamily: "Quicksand-Regular" }}>{i}</p>);
    }
    return result;
  }, [lastDate]);

  return (
    <BodyBlock>
      {dayList.map((day, idx) => (
        <DayLabel style={{ color: idx === 0 && "#E50914" }}>{day}</DayLabel>
      ))}
      {dateArr}
    </BodyBlock>
  );
}

export default CalendarBody;
