// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function numberofvehicles(car1, car2) {
  console.log(car1, car2);
  return car1 + car2;
}
// invoke the function and pass in two numbers
numberofvehicles(1, 2);
// invoke the function and pass in more than two numbers
numberofvehicles(1, 2, 3);
// invoke the function and pass in only one number
numberofvehicles(1);
// change the function to set default values for the parameters
//function defaultnumberofvehicles(car1, car2){}
// again, invoke the function and pass in only one number
//defaultnumberofvehicles(9);
// Rest Operator
// add a rest operator to the function's parameters
//function defaultnumberofvehicles(car1, car2, ...restparam){
//return defaultnumberofvehicles;
// add a line to the function's body to print the value of the rest operator
function defaultnumberofvehicles(car1, car2, ...restparam) {
  console.log(restparam);
  return car1 + car2;
}
// again, invoke the function and pass in more than two numbers
defaultnumberofvehicles(19, 3, 2);
