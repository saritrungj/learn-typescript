import { useEffect, useState, useCallback, useMemo, MouseEvent, KeyboardEvent, useRef } from 'react'

interface Users {
  id: number,
  username: string,
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 60

const App = () => {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<Users[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log('mounting');

    return () => console.log('unmounting');
  }, [users])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])

  const result = useMemo(() => fib(myNum), [myNum])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button onClick={addTwo}>Add2</button>
      <h2>{result}</h2>
    </div>
  )
}

export default App