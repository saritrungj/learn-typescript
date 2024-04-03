// Type Aliases

type stringOrnumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string,
  active: boolean,
  albums: stringOrNumberArray
}

type UserId = stringOrnumber

// Literal types

let myName: 'Sarit'

let userName: 'Sarit' | 'John' | 'Amy'
userName = 'Amy'

// functions
const add = (a: number, b: number) => {
  return a + b
}

const logMsg = (message: any) => {
  console.log(message);
}

logMsg('Hello!')
logMsg(add(2, 3))

let substract = function (c: number, d: number): number {
  return c - d
}

logMsg(substract(3, 6))

type mathFuction = (a: number, b: number) => number
// interface mathFuction { 
//   (a: number, b: number): number 
// }

let multiply: mathFuction = function (c, d) {
  return c * d
}

logMsg(multiply(3, 5))

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c
  } else {
    return a + b
  }
}

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(undefined, 3))

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1, 2, 3, 4))
logMsg(total(1, 2))

const createError = (errMsg: string): never => {
  throw new Error(errMsg)
}

const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) break
  }
}

// custrom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string'
  if (isNumber(value)) return 'number'
  return createError('This should never happen!')
}
