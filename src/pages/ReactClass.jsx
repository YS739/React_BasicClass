import { useState } from "react";
import StyledBox from "../components/StyledBox";
import InfinityRendering from "../components/InfinityRendering";

const ReactClass = () => {
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
      <InfinityRendering />
    </div>
  );
};

export default ReactClass;
