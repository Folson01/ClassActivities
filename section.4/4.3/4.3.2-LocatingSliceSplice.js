const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log("first a:", arr.indexOf("a"));
console.log("first b:", arr.indexOf("b"));
console.log("first c:", arr.indexOf("c"));

// find the last index of "a", "b", and "c"
console.log("last a:", arr.lastIndexOf("a"));
console.log("last a:", arr.lastIndexOf("b"));
console.log("last a:", arr.lastIndexOf("c"));

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
let firstislast = false;
while (!firstislast) {
  let firsta = arr.indexOf("a");
  let lastA = arr.lastIndexOf("a");
  firstislast = firsta === lastA;
  if (!firstislast) {
    arr.splice(lastA, 1);
  }
  console.log("current array:", arr.join(","));
}
