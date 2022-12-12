import { useState } from "react";
import Styled from "./components/Styled";

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
      <Styled />
    </div>
  );
};

export default App;
