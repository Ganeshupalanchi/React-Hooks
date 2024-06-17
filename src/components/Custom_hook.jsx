import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export default function Custom_hook() {
  const [name , setName] = useLocalStorage("username","");
  const [id , setId] = useLocalStorage("userId","");

  return (
    <div>
      <h1>Custom Hook</h1>
       <h3>Username is : {name}</h3>
       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
       <hr />
       <h3>UserID is : {id}</h3>
       <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
       <hr />
    </div>
  )
}
