import React, { useReducer } from 'react'

export default function UseReducerHook() {
  const initialState = {count : 0}
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase': {
        return {count : state.count + 1}
      }
      case "descrease" : {
        return {count : state.count - 1}
      }   
      case "input" : {
        return {count : action.payload}
      }   
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>Use Reducer Hook</h1>
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({type:"increase"})}>Increase</button>
        <button onClick={() => dispatch({type : "descrease"})}>Decrease</button>
        <input value={state.count} type="number" onChange={(e) => dispatch({type: "input", payload : Number(e.target.value)})} /> 
    </div>
  )
}
