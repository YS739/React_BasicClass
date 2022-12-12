// src/App.js

import React from "react";
import { useSelector } from "react-redux"; // import 해주세요.

const App = () => {
  const counterStore = useSelector((state) => state);
  // 이 코드와 같음!
  //const counterStore = seSelector(function(state){
  // return state;
  // });
  const number = useSelector((state) => state.counter.number);
  console.log(counterStore);
  console.log(number);
  return <div></div>;
};

export default App;
