// src/App.js
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber } from "./redux/modules/counter";

const App = () => {
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const dispatch = useDispatch();

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  };

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };
  console.log(number);

  return (
    <div>
      {globalNumber}
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button>빼기</button>
    </div>
  );
};

export default App;
