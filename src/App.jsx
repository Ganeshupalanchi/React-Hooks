import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import UseRefHook from "./components/UseRefHook";
import UseMemoHook from "./components/UseMemoHook";
import UseCallBackHook from "./components/UseCallBackHook";
import { Link, Outlet } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Link to="/">UseState</Link>
        <Link to="/UseEffectHook">UseEffectHook</Link>
        <Link to="/UseRefHook">UseRefHook</Link>
        <Link to="/UseMemoHook">UseMemoHook</Link>
        <Link to="/UseCallBackHook">Use Callback hook</Link>
        <Link to="/UseReducerHook">Use Reducer hook</Link>
        <Link to="/UseLaoutEffectHook">Use Layout effect hook</Link>
        <Link to="/Custom_hook">Custom Hook</Link>
      </nav>
      <hr />
      <Outlet />

      {/* <h1 className="text-xl">UseState Hook Example</h1>
      <UseStateHook />
      <hr />
      <h1>UseEffectHook Hook Example</h1>
      <UseEffectHook />
      <hr />

      <h1>UseRefHook Hook Example</h1>
      <UseRefHook />
      <hr />

      <h1> UseMemo Hook </h1>
      <UseMemoHook />
      <hr />

      <h1> Use call Back Hook </h1>
      <UseCallBackHook />
      <hr /> */}
    </>
  );
}

export default App;
