import React, { PureComponent, useContext, useMemo, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const getCubeNum = (num) => {
    console.log("Calculation done !");
    return Math.pow(num, 3);
  };
  const result = useMemo(() => getCubeNum(number), [number]);
  // const { phone, name } = useContext(AppContext);
  return (
    <div>
      <h1>Use MEmo Hook</h1>
      {/* <h2>
        {name} {phone}
      </h2> */}
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>Cube of the number is : {result}</h1>

      <button onClick={() => setCounter(counter + 1)}>Counter++</button>
      <h1>Counter {counter}</h1>
    </div>
  );
}
