"use client";

import { useState } from "react";
import calculatorstyles from "./calculator.module.css";

export default function Calculator() {
  const [screen, setScreen] = useState("");
  const [operation, setOperation] = useState("");
  function buttonClicked(value) {
    switch (value) {
      case "+":
        setOperation("+");
        break;

      case "-":
        setOperation("-");
        break;

      case "*":
        setOperation("*");
        break;

      case "/":
        setOperation("/");
        break;
    }
    setScreen(screen + value);
  }

  function clrBtn() {
    setScreen("");
  }

  function operationHandler() {
    const nums = screen.split(operation);
    switch (operation) {
      case "+":
        setScreen(Number(nums[0]) + Number(nums[1]));
        break;

      case "-":
        setScreen(Number(nums[0]) - Number(nums[1]));
        break;

      case "*":
        setScreen(Number(nums[0]) * Number(nums[1]));
        break;

      case "/":
        setScreen(Number(nums[0]) / Number(nums[1]));
        break;
    }

    // for (let i = 0; i < screen.length; i++) {
    //   if (screen[i] === "+") {
    //     const nums = screen.split("+");
    //     const result = Number(nums[0]) + Number(nums[1]);
    //     setScreen(result);
    //   }
    //   if (screen[i] === "-") {
    //     const nums1 = screen.split("-");
    //     const result1 = Number(nums1[0]) - Number(nums1[1]);
    //     setScreen(result1);
    //   }
    //   if (screen[i] === "X") {
    //     const nums2 = screen.split("X");
    //     const result2 = Number(nums2[0]) * Number(nums2[1]);
    //     setScreen(result2);
    //   }
    //   if (screen[i] === "/") {
    //     const nums3 = screen.split("/");
    //     const result3 = Number(nums3[0]) / Number(nums3[1]);
    //     setScreen(result3);
    //     // console.log(result3);
    //   }
    // }
  }

  function dlet() {
    let str = screen.toString();
    let removed = str.slice(0, str.length - 1);

    setScreen(removed);
  }

  return (
    <div className={calculatorstyles.container}>
      <div className={calculatorstyles.display}>
        {/* {number} */}
        <p>{screen}</p>
      </div>
      <div className={calculatorstyles.lr}>
        <div className={calculatorstyles.left}>
          <button onClick={() => clrBtn()}>Ac</button>
          <button onClick={dlet}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
          </button>
          <button onClick={() => buttonClicked("/")}>/</button>
          <div className={calculatorstyles.flex}>
            <button onClick={() => buttonClicked(7)}> 7</button>
            <button onClick={() => buttonClicked(8)}> 8</button>
            <button onClick={() => buttonClicked(9)}> 9</button>
          </div>

          <div className={calculatorstyles.flex}>
            <button onClick={() => buttonClicked(4)}> 4</button>
            <button onClick={() => buttonClicked(5)}> 5</button>
            <button onClick={() => buttonClicked(6)}> 6</button>
          </div>

          <div className={calculatorstyles.flex}>
            <button onClick={() => buttonClicked(1)}> 1</button>
            <button onClick={() => buttonClicked(2)}> 2</button>
            <button onClick={() => buttonClicked(3)}> 3</button>
          </div>

          <div className={calculatorstyles.flx}>
            <div className={calculatorstyles.zero}>
              <button onClick={() => buttonClicked(0)}> 0</button>
            </div>

            <button onClick={() => buttonClicked(".")}> .</button>
          </div>
        </div>

        <div className={calculatorstyles.right}>
          <button onClick={() => buttonClicked("*")}>*</button>
          <button onClick={() => buttonClicked("-")}>-</button>
          <button onClick={() => buttonClicked("+")}>+</button>
          <button onClick={operationHandler}>=</button>
        </div>
      </div>
    </div>
  );
}
