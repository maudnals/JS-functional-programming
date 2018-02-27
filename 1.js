/**
 * MUTATOR METHODS
 */
let myArray = ["scar","maud", "jo"];

myArray.pop();
myArray.shift();
myArray.push("sergei");
myArray.unshift("andrei");
myArray.sort();
myArray.push("XXXX");
myArray.reverse();
// splice = coller.
// remove 1 element from position 0
myArray.splice(0, 1);
myArray.push("another one", "bla", "whatever");
// remove 2 elements from position 0 and insert jo maud scar from position 0
myArray.splice(0, 2, "jo", "maud", "scar");

console.log(a);