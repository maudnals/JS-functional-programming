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


/**
 * 
 * observable change = side effect (visible from outside)
 */

/**
 * PURE FUNCTION
 */

(function() {

  let players = ["Arya", "Daenerys", "Tyrion", "Catelyn"];
  let lives = 3;

  function impure_playerLost() {
    // always returns something different => not referentially transparent
    lives--;
  }

  function impure_addPlayer(name) {
    // mutator method
    players.push(name);
  }

  impure_playerLost();
  impure_addPlayer("Maud");


  players = ["Arya", "Daenerys", "Tyrion", "Catelyn"];
  lives = 3;

  function pure_playerLost(lives) {
    // always same output for same input => referentially transparent
    return --lives;
  }

  // note how with FP, function outputs must be assigned: since side effects are forbidden, a function call in itself "does nothing"
  lives = pure_playerLost(lives);


})()