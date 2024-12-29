"use client";

import { useState } from "react";
import sudoStyles from "./sudo.module.css";
import { Square } from "@/components/Square";
import Link from "next/link";

export default function Sudo() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const dec = () => {
    const sorted = numbers.sort(function (a, b) {
      return b - a;
    });

    setNumbers([...sorted]);
  };

  const inc = () => {
    const sorted = numbers.sort(function (a, b) {
      return a - b;
    });
    setNumbers([...sorted]);
  };
  return (
    <div className={sudoStyles.bodii}>
      <div className={sudoStyles.bdy}>
        <div className={sudoStyles.btns}>
          <button onClick={() => dec()}>Dec</button>
          <button onClick={() => inc()}>Inc</button>
        </div>
        <div className={sudoStyles.container}>
          <div className={sudoStyles.toonuud}>
            {numbers.map((one) => {
              return <Square key={one} value={one} />;
            })}
          </div>
        </div>
      </div>
      <div className={sudoStyles.backButton}>
        <Link href="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
