// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "afternoon";
// Create a variable "greeting" that references a template literal
let greeting = `Good ${timeOfDay}' my good friend!`;
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"

// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newVar;
// Print the new variable and its type
console.log(newVar, typeof newVar);
// What type should we expect?

// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
newVar = null;
// Print the variable and its type again
// What type should we expect?
console.log(newVar, typeof newVar);
// Try to print a variable that does not exist
// What should we expect to print in the CLI?
console.log(computerVar);
// Print "greeting" again
// Will this line run?
console.log(greeting);
