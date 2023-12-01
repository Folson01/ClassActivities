// create an Array using an Array literal

// access the 1st item in the Array

// access the last item in the Array

// print the length of the Array

// use the length property to access the last item in the Array

// with for...of, loop over the Array, modify the value and add to a different Array

const trucks = ["f-450", "f-250", "silverado"];

const names = [];

console.log(trucks[0]);

console.log(trucks[2]);

trucks.length;

console.log(trucks[trucks.length - 1]);

const cars = ["chevy malibu"];

for (let vehicle of trucks) {
  let output = `Ford ${vehicle}`;
  cars.push(output);
}
