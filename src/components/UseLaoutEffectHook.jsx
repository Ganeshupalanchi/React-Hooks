import React, { useEffect, useLayoutEffect } from 'react'

export default function UseLaoutEffectHook() {
    useEffect(()=> {
        console.log("Message from useEffect");
    },[])

    useLayoutEffect(()=> {
        console.log("message Form use LayOut Effect");
    },[]);

  return (
    <div>
        <h1>UseLayoutEffectHook</h1>
        {
            Array(40000).fill('').map((item, index) => 
                (
                    <li key={index}> {Math.pow(Math.floor(Math.random() *10), 10)}</li>
                )
            )
        }
    </div>
  )
}
