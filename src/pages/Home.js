/** @format */
import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../components/Header";

function Home() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber((number) => (number = number + 1));
  };

  const decrease = () => {
    setNumber((number) => (number = number - 1));
  };

  return (
    <div>
      <button onClick={decrease}>decrease</button>
      <h1>{number}</h1>
      <button onClick={increase}>increase</button>
    </div>
  );
}

export default Home;
