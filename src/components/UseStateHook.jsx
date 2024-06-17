import React from "react";
import { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({
    brand: "Farrari",
    model: " Roma",
    year: "2023",
    color: "red",
  });
  function chageColor() {
    setCar((prev) => {
      return { ...prev, color: "Black" };
    });
  }
  const increaseCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>
      <h1 className="text-xl">UseState Hook Example</h1>
        <h1>My {car.brand}</h1>
        <h2>
          This is a {car.color} {car.model} from {car.year}
        </h2>
        <button onClick={chageColor}> Click here</button>
      </div>
      <div>
        <h1>Count : {count}</h1>
        <button onClick={increaseCount}> Increase</button>
      </div>
    </>
  );
}
