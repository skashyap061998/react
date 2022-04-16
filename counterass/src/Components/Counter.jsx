import React, { useState } from 'react'

export const Counter = () => {
const [count,setCount] = useState(0)
// const [count1,setCount1] = useState(0)


const remove=()=>{

    setCount(count-1)
}

  return (
    <>
    <h1>Counter</h1>
    <h1 style={{color:count%2==0 ? "green":"red"}}>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Add</button>
    <button onClick={remove}>Reduce</button>
    <button onClick={()=>setCount(count*2)}>Double</button>
    
    
    </>
  )
}
