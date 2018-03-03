


/**
 * observable change = side effect (visible from outside)
 */

/**
 * PURE FUNCTION
 */

(function() {
  
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
  })();

  (function() {
    // in FP, try to use `const` more often to avoid mutation
    // However as this is an array, `const` only prevent reassignment and not array content change (= array mutation)!
    // e.g. players.push("...") won't throw an error
    // (and if it did it would be a type error reassignment to const)
    const players = ["Arya", "Daenerys", "Tyrion", "Catelyn"];
    // remember that primitives are immutable; the identifier pointing at them is simply reassigned.
    let lives = 3;
  
    function pure_playerLost(lives) {
      // always same output for same input => referentially transparent
      return --lives;
    }
  
    // note how with FP, function outputs must be assigned: since side effects are forbidden, a function call in itself "does nothing" -> need for reult to be assigned
    lives = pure_playerLost(lives);

    function pure_addPlayer(players, ...names) {
      // ES6 spread operator
      return [...players, ...names];
      // or
      // return players.concat(name);
      // or
      // return [].concat(...players, name)
    }

    const newPlayers = pure_addPlayer(players, "Mike");
    const otherPlayers = pure_addPlayer(players, "Jo", "Anna");

    // note how with FP it becomes easier to make the function more flexible
    // return [...players, ["x", "y"], ...names];

    // !!!! beware of nested arrays, since arrays are passed by reference: if there's an array within people it will be passed by reference so mutable technically
  })();


  // Referential transparency = always the same, unique output for a given input
})();