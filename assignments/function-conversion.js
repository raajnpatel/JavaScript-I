// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
myFunction = () => console.log("Function was invoked");
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
anotherFunction = (param) => {return param;};
console.log(anotherFunction("boom"));



// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
add = (param1, param2) => {return param1 + param2};
console.log(add(4, 5));


// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
subtract = (param1, param2) => {return param1 - param2};
console.log(subtract(4, 5));

// Stretch

exampleArray = [1,2,3,4];
triple = exampleArray.map(num => num * 3);
console.log(triple);

// myArray = [2,4,6,8];
// quadruple = (myArray) =>
