let stringArr = ['one', 'hey', 'Sarit']

let guitars = ['Start', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArr
mixedData = guitars

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Sarit', 42, true]

let mixed = ['John', 1, false]

myTuple[1] = 42

// Objects
let myObj: object
myObj = []
console.log(typeof myObj);
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'Sarit',
  prop2: true,
}


exampleObj.prop1 = 'Sarit'
exampleObj.prop2 = false

type Guitarist = {
  name: string,
  active: boolean,
  albums: (string | number)[],
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'IV']
}

evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`
  } else {
    return `Hello`
  }
}

console.log(greetGuitarist(evh));


// Enum
// "Unlink most TypeScript features, Enums are not a type-level 
//  addition to JavaScript but something added to the 
//  language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);