import { createGlobalStyle } from "styled-components";
import CalendarTemplate from "./components/CalendarTemplate";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: "GowunDodum";
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <CalendarTemplate></CalendarTemplate>
    </>
  );
}

export default App;
