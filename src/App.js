// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "PLUS_ONE" });
        }}
      >
        +1
      </button>
    </div>
  );
};

export default App;
