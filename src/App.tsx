import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #000000;
    color: #ffffff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}

export default App;
