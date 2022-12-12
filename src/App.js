import { useState } from "react";
import StyledBox from "./components/StyledBox";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>{number}</div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -1
      </button>
      <StyledBox />
    </div>
  );
};

export default App;
