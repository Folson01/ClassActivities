const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn1 = nums.pop();
let popReturn2 = nums.pop();
console.log(popReturn1);
console.log(popReturn2);

// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn1 = nums.shift();
let shiftReturn2 = nums.shift();
console.log(shiftReturn1);
console.log(shiftReturn2);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.shift(shiftReturn2);
nums.shift(shiftReturn2);

nums.unshift(popReturn1, popReturn2);
