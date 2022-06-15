import React from "react";
import styled from "styled-components";
import CalendarDay from "./CalendarDay";

const BodyBlock = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 40px repeat(5, 1fr);
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding: 0 10px;

  /* 7n : 7의 배수 */
  & div:nth-child(7n + 1) {
    color: #e50914;
  }
`;

const DayLabel = styled.div`
  justify-self: center;
  align-self: center;
  font-weight: 700;
  /* opacity: 0.7; */
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

function CalendarBody({ currentTargets, onClickDate }) {
  const { month, date } = currentTargets;
  // 오늘 날짜 인스턴스 생성
  const today = new Date();

  // 이번 달의 첫째날(1일)에 대한 인스턴스 생성 => 단순히 일뿐만 아니라 다른 데이터도 필요
  const startDate = new Date(today.getFullYear(), month, 1);

  // 오늘 날짜 생성 => setDate()로 첫째주 일요일 날짜 설정(달력의 첫번째 날)

  const firstDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() - startDate.getDay()
    // setDate(0) => 말일 => 음수를 넣으면 말일부터 뺀다.
  );

  console.log(today.getDate());
  console.log(today.getDay());

  const renderDate = () => {
    let result = [];

    // 하루씩 더하면서 jsx 형태로 가공해서 배열에 저장
    for (let i = 0; i < 35; i++) {
      result.push(
        <CalendarDay
          firstDate={firstDate.getDate()} // 날짜를 전달 => 객체를 전달하면 참조기 때문에 다 끝나고 마지막 날짜가 전달된다.
          date={date}
          onClickDate={onClickDate}
          isCurrentMonth={month === firstDate.getMonth()} // 전달한 날짜가 이번 달인지 아닌지
        />
      );
      // 하루 더하기
      firstDate.setDate(firstDate.getDate() + 1);
    }
    return result;
  };

  return (
    <BodyBlock>
      {dayList.map((day, idx) => (
        <DayLabel>{day}</DayLabel>
      ))}
      {renderDate()}
    </BodyBlock>
  );
}

export default CalendarBody;
