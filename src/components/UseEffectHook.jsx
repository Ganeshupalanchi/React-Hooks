import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hiii2");
    // setTimeout(() => {
      //   setCount((count) => count + 1);
      // }, 500);
    }, []);
    console.log("hiii");
  return (
    
    <div>
      <h1>UseEffectHook Hook Example</h1>
      <h1>{count}</h1>
    </div>
  );
}
