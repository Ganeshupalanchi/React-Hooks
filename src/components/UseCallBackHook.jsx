import React, { useCallback, useContext, useState } from "react";
import Header from "./Header";
import { AppContext } from "../context/AppContext";

export default function UseCallBackHook() {
  const [count, setCount] = useState(0);
  const newFn = useCallback(() => {}, []);

  const { phone } = useContext(AppContext);
  return (
    <div>
      <h1>Use Call Back Hook</h1>
      <h1>{phone}</h1>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Here</button>
    </div>
  );
}
