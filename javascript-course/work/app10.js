
const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers.
val = num1 + num2;
val = num1*num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// theres math object we can do to get round, absolute, get the power of
// generate random numbers, things like that.

// Math is an object that has a lot of different properties and attributes
// that may be useful for us. 
val = Math.PI;
val = Math.E;
val = Math.round(2.5);
val = Math.ceil(2.4); // rounds up.
val = Math.floor(2.8); // rounds down.
val = Math.sqrt(25); // square root.
val = Math.abs(-3); //absolute value.
val = Math.pow(3,2); // 3^2  , power.
val = Math.min(2,3,4,5); //takes in numbers separated by commas and returns minimum.
val = Math.max(2,3,4,5); //takes in numbers separated by commas and returns maximum.
val = Math.random(); //gives us random decimal. 
val = Math.random() * 20 + 1; //gives us random decimal between 0 and 20.
val = Math.floor(Math.random() * 20+ 1); // gives us random integer between 0 and 20.
console.log(val);

