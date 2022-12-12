// src/App.js
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };
  console.log(number);

  return (
    <div>
      <input type="number" onChange={onChangeHandler} />
      <button>더하기</button>
      <button>빼기</button>
    </div>
  );
};

export default App;
