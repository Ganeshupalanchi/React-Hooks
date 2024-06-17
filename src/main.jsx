import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./context/AppContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UseStateHook from "./components/UseStateHook.jsx";
import UseEffectHook from "./components/UseEffectHook.jsx";
import UseRefHook from "./components/UseRefHook.jsx";
import UseMemoHook from "./components/UseMemoHook.jsx";
import UseCallBackHook from "./components/UseCallBackHook.jsx";
import UseReducerHook from "./components/UseReducerHook.jsx";
import UseLaoutEffectHook from "./components/UseLaoutEffectHook.jsx";
import Custom_hook from "./components/Custom_hook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <UseStateHook/>,
      },
      {
        path: "/UseEffectHook",
        element: <UseEffectHook/>,
      },
      {
        path: "/UseRefHook",
        element: <UseRefHook/>,
      },
      {
        path: "/UseMemoHook",
        element: <UseMemoHook/>,
      },
      {
        path: "/UseCallBackHook",
        element: <UseCallBackHook/>,
      },
      {
        path: "/UseReducerHook",
        element: <UseReducerHook/>,
      },
      {
        path: "/UseLaoutEffectHook",
        element: <UseLaoutEffectHook/>,
      },
      {
        path: "/Custom_hook",
        element: <Custom_hook/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  // </React.StrictMode>
);
