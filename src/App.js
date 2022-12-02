// src/App.js

import React from "react";
import { useSelector } from "react-redux"; // import 해주세요.

const App = () => {
  const counterStore = useSelector((state) => state);
  const number = useSelector((state) => state.counter.number);
  console.log(counterStore);
  console.log(number);
  return <div></div>;
};

export default App;
