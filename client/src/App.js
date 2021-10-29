import './App.css';
import styled from "styled-components"

const Heading = styled.h1`
color: red;
font-weight; bold;
`;
function App() {
  return (
    <div className="App">
      <Heading>
        Hello
      </Heading>
    </div>
  );
}

export default App;
