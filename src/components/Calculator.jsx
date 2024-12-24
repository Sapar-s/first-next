"use client";

import { useState } from "react";

export default function Calculator() {
  const [number, setNumber] = useState(0);
  function buttonClicked(n) {
    setNumber(n);
  }

  return (
    <div>
      <p>Number {number}</p>
      {/* <button onClick={() => buttonClicked(0)}> 0</button> */}
      <button onClick={() => buttonClicked(1)}> 1</button>
      <button onClick={() => buttonClicked(2)}> 2</button>
      <button onClick={() => buttonClicked(3)}> 3</button>
      <button onClick={() => buttonClicked(4)}> 4</button>
      <button onClick={() => buttonClicked(5)}> 5</button>
      <button onClick={() => buttonClicked(6)}> 6</button>
      <button onClick={() => buttonClicked(7)}> 7</button>
      <button onClick={() => buttonClicked(8)}> 8</button>
      <button onClick={() => buttonClicked(9)}> 9</button>
      <button onClick={() => buttonClicked(10)}> 10</button>
      <button onClick={() => buttonClicked(0)}> clr</button>
    </div>
  );
}
