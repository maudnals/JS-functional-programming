const list = [12, 6, 4, 66, 4, 5];


// predicate = what gives some attribute to the subject
// Par exemple, dans la proposition « Socrate est gentil », le prédicat est « gentil ».

function every(list, predicate) {
  let allPassing = true;
  for (let i = 0 ; i < list.length ; i++ ) {
    console.log(list[i]);
    if (!predicate(list[i])) {
      return (allPassing = false);
    }
  }
  return allPassing;
}

// let i = list.length;
// while (i--) {
//   console.log(list[i]);
// }

let isListEvery = every(list, (x) => {
  return x < 65;
});
console.log(isListEvery);