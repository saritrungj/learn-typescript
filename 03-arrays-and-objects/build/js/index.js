"use strict";
let stringArr = ['one', 'hey', 'Sarit'];
let guitars = ['Start', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Sarit', 42, true];
let mixed = ['John', 1, false];
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Sarit',
    prop2: true,
};
exampleObj.prop1 = 'Sarit';
exampleObj.prop2 = false;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    else {
        return `Hello`;
    }
};
console.log(greetGuitarist(evh));
// Enum
// "Unlink most TypeScript features, Enums are not a type-level 
//  addition to JavaScript but something added to the 
//  language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
