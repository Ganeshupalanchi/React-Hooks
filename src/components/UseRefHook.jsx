import React, { useEffect, useRef, useState } from "react";

export default function UseRefHook() {
  // first usecase
  const [value, setValue] = useState(0);
  const count = useRef(0);
  // const [count,setCount] = useState(0);
  useEffect(() => {
    count.current = count.current + 1;
    // setCount(prev => prev+ 1);
  });

  // second usecase
  const inputEl = useRef();
  function getInputEl() {
    console.log(inputEl.current);
  }
  return (
    <div>
      <h1>UseRefHook Hook Example</h1>
      <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
      <h2>Render Count : {count.current}</h2>

      {/*  we can use it for accesss   dom element */}
      <input type="text" ref={inputEl} />
      <button onClick={getInputEl}>Click Btn</button>
    </div>
  );
}
