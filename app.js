// src/App.js
import React from "react";

function Baby() {
  return <div>나는 자식이다!</div>;
}

function Child() {
  return <Baby />;
}

function App() {
  return <Child />;
}

export default App;
