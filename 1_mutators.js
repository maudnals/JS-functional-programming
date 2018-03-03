/**
 * MUTATOR METHODS
 */

let myArray = ["scar","maud", "jo"];

myArray.pop();
myArray.shift();
myArray.push("sergei");
myArray.unshift("andrei");
myArray.sort();
myArray.push("george");
myArray.reverse();
// splice = coller.
// remove 1 element from position 0
myArray.splice(0, 1);
myArray.push("jack0", "jack1", "jack2");
// remove 2 elements from position 0 and insert jo maud scar from position 0
myArray.splice(0, 2, "jo", "maud", "scar");