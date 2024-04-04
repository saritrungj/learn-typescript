import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(1)
  return (
    <div>   
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  )
}

export default Counter